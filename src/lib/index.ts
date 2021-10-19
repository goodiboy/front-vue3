import { App } from 'vue'
import installElements from '@/lib/element'

export default {
  install(app: App) {
    installElements(app)
  }
}
