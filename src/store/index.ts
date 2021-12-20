import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { userInfoModule, UserInfoState } from '@/store/userInfo'

export interface RootState {
  count: number
}

export interface RootStateTypes extends RootState {
  userInfoModule: UserInfoState
}

export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
  state: {
    count: 0
  },
  modules: {
    userInfoModule
  }
})

// 定义自己的 `useStore` 组合式函数
export const useStore = <T = RootStateTypes>() => {
  return baseUseStore<T>(key)
}
