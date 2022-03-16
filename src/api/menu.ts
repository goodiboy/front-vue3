import AxiosInstance from '@/utils/axios'
import { MenuType } from '@/types/menu'
/**
 * 获取菜单列表
 */
export const getMenuList = (params?: any) => {
  return AxiosInstance.get<MenuType[]>('/menu/list', {
    params,
    mock: false
  })
}

/**
 * 获取添加删除菜单
 */
export const operateMenu = (params: any) => {
  return AxiosInstance.post('/menu/operate', params)
}

/**
 * 删除菜单
 * @param _id 菜单的id
 */
export const deleteMenu = (_id: string) => {
  return AxiosInstance.delete('/menu/delete', {
    params: {
      _id
    }
  })
}
