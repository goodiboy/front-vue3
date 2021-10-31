import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import 'reset-css'
import './assets/global.scss'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import lib from '@/lib'

const app = createApp(App)
// app.use(ElementPlus)
app.use(router).use(lib)
app.mount('#app')
