import { Module } from 'vuex'
import { UserInfo } from '@/types/UserInfo'
import { RootState } from '@/store/index'

export const userInfoModule: Module<UserInfo | null, RootState> = {
  namespaced: true,
  state: null,
  mutations: {
    setUserInfo(state, userInfo: UserInfo) {
      Object.assign(state, userInfo)
    }
  }
}
