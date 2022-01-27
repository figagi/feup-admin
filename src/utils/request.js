import axios from 'axios';
import { assert } from '../utils';
import { HTTP_STATUS } from '../consts/statusCode';
import { message } from 'antd';
import { ACCESS_TOKEN, API } from '../consts/env';
import Cookie from '../utils/tools/cookie';
import { apiErrReport } from './log';

const instance = axios.create({
  baseURL: API.baseUrl,
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
    appId: 'null',
    tenantId: '6XWFVymtaB68REyRBuf',
  },
  withCredentials: false,
});

// 中间件 拦截请求-
instance.interceptors.request.use(
  (config) => {
    const newConfig = config;
    const token = Cookie.get(ACCESS_TOKEN);
    if (token) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }
    return newConfig;
  },
  (err) => {
    return Promise.reject(err);
  },
);
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (!err.response) {
      return;
    }
    const res = err.response;
    if (res.status === HTTP_STATUS.AUTHENTICATE) {
      // logout();
      Promise.reject(err);
      return;
    }
    message.error(`${res.data.message}`);
    apiErrReport(res);
    Promise.reject(err);
  },
);

const exceptionHandling = (data) => {
  if (!data) {
    return false;
  }

  if (
    data.status === HTTP_STATUS.SUCCESS ||
    data.status === HTTP_STATUS.POST_SUCCESS ||
    data.status === HTTP_STATUS.NOT_MODIFIED
  ) {
    return data;
  }
  assert(false, data.statusText);

  return false;
};

/**
 * get
 * @param url
 * @param data
 * @returns {Promise}
 */
const get = (url, params = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    instance
      .get(url, {
        params,
        headers,
      })
      .then((response) => {
        const res = exceptionHandling(response);
        if (res) {
          resolve(res.data.data);
        } else {
          reject(res);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * post
 * @param url
 * @param data
 * @returns {Promise}
 */
const post = (url, data = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, { headers }).then(
      (response) => {
        const res = exceptionHandling(response);
        if (res) {
          resolve(response.data);
        } else {
          reject(res.error);
        }
      },
      (err) => {
        reject(err);
      },
    );
  });
};

/**
 * put
 * @param url
 * @param data
 * @returns {Promise}
 */
const put = (url, data = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    instance.put(url, data, { headers }).then(
      (response) => {
        const res = exceptionHandling(response);
        if (res) {
          resolve(response.data);
        } else {
          reject(res.error);
        }
      },
      (err) => {
        reject(err);
      },
    );
  });
};

/**
 * del
 * @param url
 * @param data
 * @returns {Promise}
 */
const del = (url, data = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    instance.delete(url, { data, headers }).then(
      (response) => {
        const res = exceptionHandling(response);
        if (res) {
          resolve(response.data);
        } else {
          reject(res.error);
        }
      },
      (err) => {
        reject(err);
      },
    );
  });
};

const request = {
  get,
  post,
  put,
  del,
};

export default request;
