import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Home.vue'),
    children: [
      {
        name: 'user',
        path: 'user',
        meta: {
          title: '用户管理'
        },
        component: () => import('@/views/user-manager/UserManager.vue')
      }
    ]
  }
] as RouteRecordRaw[]
