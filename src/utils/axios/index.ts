import axios from 'axios'

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_REQUIRE_URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  timeout: 10000
})

AxiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

AxiosInstance.interceptors.response.use(
  (response) => {
    if (response.data.code === 200) {
      return Promise.resolve(response.data)
    } else {
      if (!response.config.custom?.disableMsg) {
        ElMessage.error(response.data.msg)
      }
      return Promise.reject(response)
    }
  },
  (error) => {
    ElMessage.error('服务繁忙!')
    return Promise.reject(error)
  }
)

export default AxiosInstance
