import axios from 'axios';
import { message } from 'antd';
import { HTTP_STATUS } from '../consts/statusCode';
import { CMS_BASEURL, ACCESS_TOKEN } from '../consts/env';
import { apiErrReport } from './log';
import Cookie from './tools/cookie';
import logUtils from './tools/logUtils';

axios.defaults.withCredentials = true;
axios.defaults.timeout = 50000;
axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.defaults.baseURL = CMS_BASEURL;
// 中间件 拦截请求-
axios.interceptors.request.use(
  (config) => {
    const token = Cookie.get(ACCESS_TOKEN);
    if (token) {
      if (!config.params || (config.params && !config.params.disable_token)) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);
axios.interceptors.response.use(
  (response) => {
    // jwt认证失效
    // if (response?.data?.code === COMMON_STATUS.JWT_FAILED) {
    //   console.log(response);
    //   // window.location.href = '/login';
    // }
    return response;
  },
  (err) => {
    if (!err.response) {
      return;
    }
    const res = err.response;
    if (res.status === HTTP_STATUS.AUTHENTICATE) {
      window.location.href = '/login';
      Promise.reject(err);
      return;
    }
    message.error(`${res.data.message}`);
    apiErrReport(res);
    Promise.reject(err);
  },
);

const safeRequest = (url, options) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      ...options,
      url,
    }).then(
      (res) => {
        if (res) {
          resolve(res.data);
        } else {
          reject(res);
        }
      },
      (err) => {
        logUtils.error(err);
        reject(err);
      },
    );
  });
};

/**
 * get
 * @param url
 * @param opts
 * @returns {Promise}
 */
const get = (url, opts = {}) => {
  return safeRequest(url, opts);
};

/**
 * post
 * @param url
 * @param opts
 * @returns {Promise}
 */
const post = (url, opts = {}) => {
  return safeRequest(url, {
    ...opts,
    method: 'POST',
  });
};

/**
 * put
 * @param url
 * @param opts
 * @returns {Promise}
 */
const put = (url, opts = {}) => {
  return safeRequest(url, {
    ...opts,
    method: 'PUT',
  });
};

const request = {
  get,
  post,
  put,
};

export default request;
