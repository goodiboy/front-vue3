import AxiosInstance from '@/utils/axios'
import type { UserInfo } from '@/types/userInfo'
import type { ListData } from '@/types/common'
import { SystemRole, UserListParams } from '@/types/userInfo'

/**
 * 获取用户列表
 * @param params
 */
export const getUserList = (params: UserListParams) => {
  return AxiosInstance.get<ListData<UserInfo>>('/users/list', {
    params,
    mock: true
  })
}

export const getSystemRoleList = () => {
  return AxiosInstance.get<SystemRole[]>('/roles/allList', {
    mock: true
  })
}
