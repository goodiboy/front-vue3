import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Index.vue')
  }
] as RouteRecordRaw[]
