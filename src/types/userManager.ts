export enum UserState {
  all, // 全部
  working, // 在职
  quit, // 离职
  trial // 试用期
}
export interface UserSelectForm {
  userId?: string
  userName?: string
  state: UserState
}
