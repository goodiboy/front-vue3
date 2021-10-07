import ElContainer, {
  ElMenu,
  ElMain,
  ElMenuItem,
  ElHeader,
  ElFooter,
  ElSubMenu,
  ElPopper
} from 'element-plus'
import { App } from 'vue'
const installElements = (app: App): void => {
  app
    .use(ElMenu)
    .use(ElMain)
    .use(ElMenuItem)
    .use(ElContainer)
    .use(ElHeader)
    .use(ElFooter)
    .use(ElSubMenu)
    .use(ElPopper)
}
export default installElements
