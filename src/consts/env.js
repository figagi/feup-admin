// 判断当前是哪个环境
export const currentEnv = process.env.FIG_ENV;
const ctext = currentEnv !== 'prod' ? `开课吧${currentEnv}` : '开课吧';

// 不要删除，用来识别当前项目环境
// eslint-disable-next-line
console.info(
  `\n %c ${ctext} %c https://admin.feup.cn \n`,
  'color: #fff; background: #03a8e8; padding:5px 0; font-size:12px;font-weight: bold;',
  'background: #03a8e8; padding:5px 0; font-size:12px;',
);

export const isDevEnv = currentEnv === 'dev';
export const isPreEnv = currentEnv === 'pre';
export const isTestEnv = currentEnv === 'test';
export const isProdEnv = currentEnv === 'prod';

const cmsBaseUrl = {
  dev: 'https://consoletest.feup.cn',
  test: 'https://consoletest.feup.cn',
  pre: 'https://consolepre.feup.cn',
  prod: 'https://console.feup.cn',
}[currentEnv];

export const CMS_BASEURL = cmsBaseUrl;
export const QINIU_BASEURL = cmsBaseUrl;
export const QINIU_IMG_HOST = `https://img.feup.cn/`;

// access_token
export const ACCESS_TOKEN = {
  dev: 'corgi-token-dev-data',
  test: 'corgi-token-test-data',
  test2: 'corgi-token-test2-data',
  pre: 'corgi-token-pre-data',
  prod: `corgi-token-prod-data`,
}[currentEnv];
