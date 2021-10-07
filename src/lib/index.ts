import { App } from 'vue'
import installElements from '@/lib/element'

const registerPlus = (app: App): void => {
  installElements(app)
}

export default registerPlus
