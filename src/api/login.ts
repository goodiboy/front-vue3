import AxiosInstance from '@/utils/axios'
import { LoginForm } from '@/types/login'

const login = (data: LoginForm) => {
  return AxiosInstance.post('/login/login', data)
}

const register = (data: LoginForm) => {
  return AxiosInstance.post('/login/register', data)
}
const forget = (data: LoginForm) => {
  return AxiosInstance.post('/login/reset', data)
}

export { login, register, forget }
