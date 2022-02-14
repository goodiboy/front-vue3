import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Home.vue'),
    children: [
      {
        name: 'UserManager',
        path: 'user',
        meta: {
          title: '用户管理'
        },
        component: () => import('@/views/user-manager/UserManager.vue')
      },
      {
        name: 'Menu',
        path: 'menu',
        meta: {
          title: '菜单管理'
        },
        component: () => import('@/views/menu/Menu.vue')
      }
    ]
  }
] as RouteRecordRaw[]
