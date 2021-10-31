import { App } from 'vue'
import installElements from './element-ui'
export default {
  install(app: App) {
    installElements(app)
  }
}
