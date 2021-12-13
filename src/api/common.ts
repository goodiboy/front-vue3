import AxiosInstance from '@/plugin/axios'
import { CaptchaType, ResponseType } from '@/types/common'

// 获取验证码
const getCaptcha = () => {
  return AxiosInstance.get('/common/getCaptcha') as Promise<ResponseType<CaptchaType>>
}

export { getCaptcha }
