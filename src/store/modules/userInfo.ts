import { Module } from 'vuex'
import { UserInfo } from '@/types/UserInfo'
import { RootState } from '@/store'

export interface UserInfoState {
  token?: string
  userInfo?: UserInfo
}

export const userInfoModule: Module<UserInfoState, RootState> = {
  namespaced: true,
  // 这里的state会被proxy代理
  state: {} as UserInfoState,

  getters: {
    username(state) {
      if (!state.userInfo) return undefined
      return state.userInfo.username
    },
    nickname(state) {
      if (!state.userInfo) return undefined
      return state.userInfo.nickname
    },
    token(state) {
      if (!state.token) return undefined
      return state.token
    },
    isLogin(state) {
      return !!state.token
    }
  },

  mutations: {
    setUserInfo(state, data: UserInfoState | null) {
      if (!data) {
        state.token = undefined
        state.userInfo = undefined
      } else {
        state.token = data.token
        state.userInfo = data.userInfo
        // Object.assign(state, data)
      }
    }
  }
}
