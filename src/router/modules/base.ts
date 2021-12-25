import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home/Home.vue')
      }
    ],
    component: () => import('@/views/home/Index.vue')
  }
] as RouteRecordRaw[]
