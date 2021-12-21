import { Module } from 'vuex'
import { UserInfo } from '@/types/UserInfo'
import { RootState } from '@/store/index'

export interface UserInfoState {
  token: string
  userInfo: UserInfo
}

export const userInfoModule: Module<UserInfoState | null, RootState> = {
  namespaced: true,
  state: null,

  getters: {
    username(state) {
      return state?.userInfo.username
    },
    nickname(state) {
      return state?.userInfo.nickname
    },
    token(state) {
      return state?.token
    },
    isLogin(state) {
      return !!state
    }
  },

  mutations: {
    setUserInfo(state, data: UserInfoState) {
      Object.assign(state, data)
    }
  }
}
