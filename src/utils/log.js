// import Log from '@kkb/fig-log';

function html2Escape(sHtml) {
  return sHtml.replace(/[<>&"]/g, (c) => {
    return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c];
  });
}

export const apiErrReport = (res) => {
  let apiResponse = '';
  if (res?.request?.responseType === 'json') {
    apiResponse = JSON.stringify(res?.request?.response);
  }
  if (res?.request?.responseType === 'text' || res?.request?.responseType === '') {
    apiResponse = res?.request?.responseText;
  }

  // Log.report({
  //   type: 'apiError', // 固定
  //   apiInfo: {
  //     response_status_code: res?.status || '',
  //     request_method: res?.config?.method || '',
  //     request_path: res?.config?.url || '',
  //     request_params: JSON.stringify(
  //       res?.config?.data || res?.config?.params || '',
  //     ),
  //     response_content: html2Escape(apiResponse),
  //   },
  // });
};

export const noMatchReport = () => {
  // Log.report({ type: 'noMatch' });
};

const defaultLog = {
  apiErrReport,
  noMatchReport,
};

export default defaultLog;
