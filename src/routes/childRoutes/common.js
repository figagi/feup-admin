const Routes = [
  {
    path: '/app/home',
    name: '帐号管理',
    // 定义父级path（左侧菜单），如本身就是左侧菜单可不写
    // parentPath: '/app/home',
    component: () => import('../../views/Home'),
  },
  {
    path: '/app',
    name: '帐号管理',
    // 定义父级path（左侧菜单），如本身就是左侧菜单可不写
    // parentPath: '/app/home',
    component: () => import('../../views/Home'),
  },
];
export default Routes;
