import type { PageType } from '@/types/common'

export enum UserState {
  working = 1, // 在职
  quit, // 离职
  trial // 试用期
}

export enum RoleEnum {
  PRODUCT = 'PRODUCT',
  DEVELOP = 'DEVELOP',
  JAVA = 'JAVA',
  DEV_OPS = 'DEV_OPS',
  OPERATE = 'OPERATE',
  MARKET = 'MARKET',
  MANAGER = 'MANAGER',
  TEST = 'TEST'
}

export interface Role {
  roleName: RoleEnum
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
  updated: string
  lastLogin: string
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
