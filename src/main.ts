import { createApp } from 'vue'
import App from './App.vue'
import 'reset-css'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import registerPlus from '@/lib'

const app = createApp(App)
// app.use(ElementPlus)
registerPlus(app)
app.mount('#app')
