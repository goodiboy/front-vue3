import AxiosInstance from '@/utils/axios'
/**
 * 获取菜单列表
 */
export const getMenuList = () => {
  return AxiosInstance.get('/menu/list', {
    mock: true
  })
}
