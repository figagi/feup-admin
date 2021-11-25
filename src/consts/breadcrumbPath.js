import { routeList } from '../routes/subRoutes';

// 导航栏数据
export const menuDatas = {
  ...routeList?.reduce((preValues, curValue) => {
    const newData = preValues;
    if (curValue.name) newData[curValue.name] = curValue.path;
    return newData;
  }, {}),
};

// 路由菜单映射
export const routerMenuMap = {
  ...routeList?.reduce((preValues, curValue) => {
    const newData = preValues;
    if (curValue.path) newData[curValue.path] = curValue;
    return newData;
  }, {}),
};

// 获取导航path数据
export const getMeunPath = (name) => {
  const selectData = menuDatas[name];

  if (selectData) {
    return {
      name,
      path: selectData,
    };
  }
  return { name };
};
