import { notification } from 'antd';
// cms统一提示风格组件
export default {
  /**
   * 成功提示
   */
  success: (msg, ...arg) => {
    notification.success({
      message: msg,
      ...arg,
    });
  },

  /**
   * 错误提示
   */
  error: (msg, ...arg) => {
    notification.error({
      message: msg,
      ...arg,
    });
  },
};
