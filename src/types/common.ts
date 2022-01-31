// 数据返回类型
export interface ResponseDataType<T = any> {
  data: T
  msg: string
  code: number
}

export interface PageType {
  pageNum: number
  pageSize: number
  total: number
}

// 分页数据类型
export interface ListData<T = any> {
  list: T[]
  page: PageType
}
// 验证码类型
export interface CaptchaType {
  captchaId: string
  captcha: SVGElement
  captchaText: string
}
