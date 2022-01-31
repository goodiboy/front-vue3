//eslint-disable-next-line
import { AxiosRequestConfig, AxiosInstance } from 'axios'

import type { ResponseDataType } from '@/types/common'

declare module 'axios' {
  interface AxiosRequestConfig {
    disableMsg?: boolean
    mock?: boolean
  }

  // prettier-ignore
  interface AxiosInstance {
    request<T = any, R = ResponseDataType<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
    get<T = any, R = ResponseDataType<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
    delete<T = any, R = ResponseDataType<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
    head<T = any, R = ResponseDataType<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
    options<T = any, R = ResponseDataType<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
    post<T = any, R = ResponseDataType<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    put<T = any, R = ResponseDataType<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    patch<T = any, R = ResponseDataType<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
  }
}
