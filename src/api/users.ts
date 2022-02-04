import AxiosInstance from '@/utils/axios'
import type { UserInfo } from '@/types/userInfo'
import type { ListData } from '@/types/common'
import { UserListParams } from '@/types/userInfo'

export const getUserList = (params: UserListParams) => {
  return AxiosInstance.get<ListData<UserInfo>>('/users/list', {
    params,
    mock: true
  })
}
