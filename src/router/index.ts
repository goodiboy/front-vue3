import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      disableHeader: true
    },
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      disableHeader: true
    },
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
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
