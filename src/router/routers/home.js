
// home页面相关路由

export default   {
    path: '/home',
    component: () => import('views/Home'),
    children: [
      {
        path: '',
        redirect: '/home/welcome'
      },
      {
        path: '/home/welcome',
        component: () => import('views/homechild/Welcome')
      },
      {
        path: '/home/users',
        component: () => import('views/homechild/Users')
      },
      {
        path: '/home/rote',
        component: () => import('views/homechild/Rote')
      },
      {
        path: '/home/product',
        component: () => import('views/homechild/Product')
      },
      {
        path: '/home/params',
        component: () => import('views/homechild/Params')
      },
      {
        path: '/home/classify',
        component: () => import('views/homechild/ClassFiy')
      }

    ]
  }