// 验证码类型
export interface CaptchaType {
  captchaId: string
  captcha: SVGElement
  captchaText: string
}

// 数据返回类型
export interface ResponseType<T = any> {
  data: T
  msg: string | null
  code: number
}
