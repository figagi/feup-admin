import { notification } from 'antd';
import { isDevEnv, isTestEnv } from '@/consts/env';

// 开发环境log处理
const logUtils = {
  info: (...arg) => {
    if (isDevEnv || isTestEnv) {
      // eslint-disable-next-line
      console.log(...arg);
    }
  },
  error: (data) => {
    if (isDevEnv || isTestEnv) {
      // eslint-disable-next-line
      data &&
        notification.error({
          message: data?.message,
        });
    }
  },
};

export default logUtils;
