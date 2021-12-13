//eslint-disable-next-line
import { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'

// 数据返回类型
interface ResponseDataType<T = any> {
  data: T
  msg: string
  code: number
}

declare module 'axios' {
  interface AxiosRequestConfig {
    custom?: {
      disableMsg: boolean
    }
  }

  // prettier-ignore
  interface AxiosInstance {
    request<T = any, D = any>(config: AxiosRequestConfig<D>): Promise<ResponseDataType<T>>;
    get<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<ResponseDataType<T>>;
    delete<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<ResponseDataType<T>>;
    head<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<ResponseDataType<T>>;
    options<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<ResponseDataType<T>>;
    post<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<ResponseDataType<T>>;
    put<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<ResponseDataType<T>>;
    patch<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<ResponseDataType<T>>;
  }
}
