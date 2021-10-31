import ElContainer, {
  ElMenu,
  ElMain,
  ElMenuItem,
  ElHeader,
  ElFooter,
  ElSubMenu,
  ElPopper,
  ElRow,
  ElCol,
  ElButton,
  ElFormItem,
  ElForm,
  ElInput
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
    .use(ElRow)
    .use(ElCol)
    .use(ElButton)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElInput)
}
export default installElements
