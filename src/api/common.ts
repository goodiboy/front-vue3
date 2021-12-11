import AxiosInstance from '@/plugin/axios'
import { CaptchaType } from '@/types/common'

// 获取验证码
const getCaptcha = () => {
  return AxiosInstance.get('/common/getCaptcha') as Promise<CaptchaType>
}

export { getCaptcha }
