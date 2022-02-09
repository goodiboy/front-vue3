import type { PageType } from '@/types/common'

export enum UserState {
  working = 1, // 在职
  quit, // 离职
  trial // 试用期
}

export enum UserRole {
  admin, // 管理员
  ordinary // 普通用户
}

export interface SystemRole {
  roleName: string
  _id: string
}

export enum Sex {
  man,
  woman
}

// 用户信息
export interface UserInfo {
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
  userRole: UserRole
  systemRole: SystemRole[]
  remark: string
}

// 用户查询表单
export interface UserQueryForm {
  userId?: string
  userName?: string
  state: UserState | number // 有一个选项是0代表全部
}

export type UserListParams = UserQueryForm & PageType
