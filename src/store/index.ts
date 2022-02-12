import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { userInfoModule, UserInfoState } from '@/store/modules/userInfo'
import { cacheApiModule, CacheApiState } from '@/store/modules/cacheApi'

export interface RootState {
  count: number
}

export interface RootStateTypes extends RootState {
  userInfoModule: UserInfoState
  cacheApiModule: CacheApiState
}

export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
  state: {
    count: 0
  },
  modules: {
    userInfoModule,
    cacheApiModule
  }
})

// 定义自己的 `useStore` 组合式函数
export const useStore = <T = RootStateTypes>() => {
  return baseUseStore<T>(key)
}
