import axios, { Method } from 'axios'
import { store } from '@/store'
import { toRaw } from 'vue'
import qs from 'qs'
import { useStorage } from '@/utils/storage/storage'

const storage = useStorage()
const AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  timeout: 10000
})

AxiosInstance.interceptors.request.use(
  (config) => {
    const userInfo = storage.getItem('userInfo')
    if (userInfo) {
      const { token } = userInfo
      config.headers!.Authorization = 'Bearer ' + token
    }

    //@ts-ignore  这个cacheApiModule类型是在modules里面的，ts类型无法适配，暂时限于ignore
    const cacheData = store.state.cacheApiModule[config.url]
    if (cacheData) {
      // 适配器，直接返回该适配器的数据，不走接口请求，类似mock
      // 如果这个数据已经存在vuex的话，直接从vuex获取，无需再进行请求数据
      config.adapter = () => {
        return new Promise((resolve) => {
          resolve(toRaw(cacheData)) // 存在vuex的数据已经被转换为ref，这里需要使用toRow转换回非ref对象
        })
      }
    }

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

    const requestMethod = config.method?.toLocaleLowerCase() as Method
    // 对一下几个方法的参数进行序列号，要不然传不了对象和数据参数 get，delete，head ，暂时只需用到delete
    if (requestMethod === 'delete') {
      config.paramsSerializer = (params) => {
        console.log(params)
        return qs.stringify(params, { indices: false })
      }
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

AxiosInstance.interceptors.response.use(
  (response) => {
    const showDialog = !response.config.disableMsg && response.data.msg
    if (response.data.code === 200) {
      if (response.config.cacheApi) {
        store.commit('cacheApiModule/sava', { api: response.config.url, data: response })
      }
      if (showDialog) {
        ElMessage.success(response.data.msg)
      }
      return Promise.resolve(response.data)
    } else {
      if (showDialog) {
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
