import AxiosInstance from '@/plugin/axios'

export default class PublicController {
  static getCaptcha() {
    return AxiosInstance.get('/getCaptcha')
  }
}
