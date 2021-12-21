import { useStorage } from '@/utils/storage/storage'
import { useStore } from '@/store'

// 根据storage改变vuex的用户信息
const listenUserInfo = () => {
  const storage = useStorage()
  const store = useStore()

  // 初始化进入页面时获取storage的用户信息存到vuex
  const userInfo = storage.getItem('userInfo')
  if (userInfo) {
    store.commit('userInfoModule/setUserInfo', userInfo)
  }

  // 当userInfo发生变化的时候，更新vuex的userInfo
  storage.on('set:userInfo', (event) => {
    store.commit('userInfoModule/setUserInfo', event.newValue)
  })

  // 当userInfo发生变化的时候，更新vuex的userInfo
  storage.on('clearAll', () => {
    console.log('clearAll')
    store.commit('userInfoModule/setUserInfo', null)
  })
}

export default () => {
  listenUserInfo()
}
