import axios from 'axios'

const AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  timeout: 10000
})

AxiosInstance.interceptors.request.use(
  (config) => {
    let isMock = import.meta.env.VITE_MOCK === 'true' // 默认使用全局的mock
    if (config.mock != undefined) {
      // 如果接口配置了单独的mock，使用接口的单独配置
      isMock = config.mock
    }
    let baseURL: string | undefined
    if (import.meta.env.PROD) {
      baseURL = import.meta.env.VITE_BASE_URL // 生产环境下，不使用mock数据
    } else {
      baseURL = isMock ? import.meta.env.VITE_MOCK_URL : import.meta.env.VITE_BASE_URL
    }

    config.baseURL = baseURL

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
      if (!response.config.disableMsg) {
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
