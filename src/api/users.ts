import AxiosInstance from '@/utils/axios'
import type { UserInfo } from '@/types/userInfo'
import type { ListData } from '@/types/common'
import { Role, UserListParams } from '@/types/userInfo'
/**
 * 获取用户列表
 * @param params
 */
export const getUserList = (params: UserListParams) => {
  return AxiosInstance.get<ListData<UserInfo>>('/users/list', {
    params,
    mock: false
  })
}

/**
 * 编辑或者添加用户
 * @param params
 */
export const operateUser = (params: UserInfo) => {
  return AxiosInstance.post('/users/operate', params)
}

export const deleteUser = (_ids: string[]) => {
  return AxiosInstance.delete('/users/delete', {
    params: {
      _ids
    }
  })
}

/**
 * 获取系统角色列表
 */
export const getSystemRoleList = () => {
  return AxiosInstance.get<Role[]>('/roles/allList', {
    mock: true,
    cacheApi: true
  })
}

/**
 * 获取部门列表
 */
export const getDeptList = () => {
  return AxiosInstance.get<Role[]>('/dept/list', {
    mock: true
  })
}
