const MENUS = [
  {
    name: '系统管理',
    path: '/app',
    icon: 'setting',
    childMenu: [
      {
        name: '帐号管理',
        path: '/app/home',
        component: 'views/Home',
      },
    ],
  },
];

export default MENUS;
