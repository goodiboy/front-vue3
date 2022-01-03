import AxiosInstance from '@/utils/axios'
import type { CaptchaType } from '@/types/common'

// 获取验证码
const getCaptcha = () => {
  return AxiosInstance.get<CaptchaType>('/common/getCaptcha')
}

export { getCaptcha }
