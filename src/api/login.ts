import AxiosInstance from '@/utils/axios'
import type { LoginForm } from '@/types/login'
import { transData } from '@/utils/rsa'

const login = (data: LoginForm) => {
  const newData = transData(data)
  return AxiosInstance.post('/login/login', newData)
}

const register = (data: LoginForm) => {
  const newData = transData(data)
  return AxiosInstance.post('/login/register', newData)
}
const forget = (data: LoginForm) => {
  const newData = transData(data)
  return AxiosInstance.post('/login/reset', newData)
}

export { login, register, forget }
