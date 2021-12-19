import init from '@/utils/run/init'

// 要在初始化完成才能执行方法，要不然很多参数获取不到
export default () => {
  init()
}
