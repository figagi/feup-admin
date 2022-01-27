// 判断当前是哪个环境
export const currentEnv = process.env.FEUP_ENV || 'test';
const ctext = currentEnv !== 'prod' ? `FEUP ${currentEnv}` : 'FEUP';

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

const envPrefix = {
  dev: 'dev-',
  test: 'test-',
  pre: 'pre-',
  prod: '',
};

// access_token
export const ACCESS_TOKEN = `corgi-token-${currentEnv}-data`;

export const API = {
  baseUrl: `https://${envPrefix[currentEnv]}staff-api.kaikeba.cn`,
};
