import { Module } from 'vuex'
import { RootState } from '@/store'
export interface CacheApiState {
  [key: string]: any
}

export const cacheApiModule: Module<CacheApiState, RootState> = {
  namespaced: true,
  state: {},
  mutations: {
    sava(state, { api, data }: { api: string; data: any }) {
      state[api] = data
    }
  }
}
