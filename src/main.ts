import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import 'reset-css'
import './assets/global.scss'
import { key, store } from '@/store'

const app = createApp(App)
app.use(store, key)
app.use(router)
app.mount('#app')
