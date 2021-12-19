import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const modulesFiles = import.meta.globEager('./modules/*.ts')

let routes: RouteRecordRaw[] = []
const modules = Object.values(modulesFiles)

modules.forEach((item) => {
  routes = routes.concat(item.default as RouteRecordRaw[])
})

console.log(routes)
const router = createRouter({
  routes,
  history: createWebHistory()
})
export default router
