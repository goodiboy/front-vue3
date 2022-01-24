import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/login/Register.vue')
  },
  {
    path: '/forget',
    name: 'Forget',
    meta: {
      disableHeader: true
    },
    component: () => import('@/views/login/Forget.vue')
  }
] as RouteRecordRaw[]
