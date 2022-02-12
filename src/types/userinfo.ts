import type { PageType } from '@/types/common'

export enum UserState {
  working = 1, // 在职
  quit, // 离职
  trial // 试用期
}

export interface Role {
  roleName: string
  _id: string
}

export enum Sex {
  man,
  woman
}

// 用户信息
export interface UserInfo {
  _id?: string
  num: number // 记录用户是第几位员工
  username: string
  password: string
  nickname: string
  created: string
  update: string
  mobile: string
  sex: Sex
  deptId: string[]
  job: string
  state: UserState
  admin: boolean // 是否管理员
  roleList: Role[] // 岗位角色
  remark: string
}

// 用户查询表单
export interface UserQueryForm {
  nickname?: string
  username?: string
  state: UserState | number // 有一个选项是0代表全部
}

export type UserListParams = UserQueryForm & PageType
