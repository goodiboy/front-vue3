import AxiosInstance from '@/utils/axios'
import type { UserInfo } from '@/types/userInfo'
import type { ListData } from '@/types/common'

export const getUserList = (params: any) => {
  return AxiosInstance.get<ListData<UserInfo>>('/users/list', {
    params,
    mock: true
  })
}
