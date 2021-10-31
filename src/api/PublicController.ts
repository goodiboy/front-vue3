import AxiosInstance from '@/plugin/axios'

export default class PublicController {
  static async getCaptcha() {
    return await AxiosInstance.get('/getCaptcha')
  }
}
