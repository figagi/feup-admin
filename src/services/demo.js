import request from '../utils/request';
import { apiBaseUrl } from '../consts/env';

// 创建banner、pop、金刚位的接口
// return request.post(`${apiBaseUrl}console/adv/advertisement`, payload);
export const coming = (payload) =>
  request.post(`https://api.shudong.wang/v1/movies/coming`, payload);
