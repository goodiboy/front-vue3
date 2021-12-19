import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/Home.vue')
  }
] as RouteRecordRaw[]
