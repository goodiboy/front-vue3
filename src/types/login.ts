export interface LoginForm {
  username: string // 用户名
  nickname: string // 昵称
  password: string // 密码
  password2?: string // 确认密码
  captchaId: string // 传给后端的验证码id
  captchaText?: string // 用来校验验证是否正确的字符串
  captcha: string // 传给后端的验证码
}
