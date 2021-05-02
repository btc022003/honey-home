export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    name: 'notices',
    icon: 'BellOutlined',
    path: '/notices/list',
    component: './Notices',
  },
  {
    name: 'banners',
    icon: 'InsertRowBelowOutlined',
    path: '/banners',
    routes: [
      {
        path: '/banners/categories',
        name: 'categories',
        component: './Banners/BannerCategories',
      },
      {
        path: '/banners/index',
        name: 'index',
        component: './Banners',
      },
    ],
  },
  {
    name: 'users',
    icon: 'UserOutlined',
    path: '/users',
    routes: [
      {
        path: '/users/list',
        name: 'list',
        component: './Users',
      },
    ],
  },
  {
    name: 'products',
    icon: 'ShoppingOutlined',
    path: '/products',

    routes: [
      {
        path: '/products/list',
        name: 'index',
        component: './Products',
      },
      {
        path: '/products/categories',
        name: 'categories',
        component: './ProductCategories',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
