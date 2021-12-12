import AxiosInstance from '@/plugin/axios'
import { LoginForm } from '@/types/login'

const login = (data: LoginForm) => {
  console.log(data)
  return AxiosInstance.post('/login/login', data)
}

const register = (data: LoginForm) => {
  return AxiosInstance.post('/login/register', data)
}
const forget = (data: LoginForm) => {
  return AxiosInstance.post('/login/forget', data)
}

export { login, register, forget }
