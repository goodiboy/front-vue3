// 数据返回类型
export interface ResponseDataType<T = any> {
  data: T
  msg: string
  code: number
}

// 分页数据类型
export interface ListData<T = any> {
  list: T[]
  page: {
    pageNum: number
    pageSize: number
    total: number
  }
}
// 验证码类型
export interface CaptchaType {
  captchaId: string
  captcha: SVGElement
  captchaText: string
}
