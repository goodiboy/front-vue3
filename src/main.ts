import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import 'reset-css'
import './assets/scss/global.scss'
import { key, store } from '@/store'
import storage from '@/utils/storage/storage'

const app = createApp(App)
app.use(storage, 'font-vue').use(store, key).use(router).mount('#app')
