//eslint-disable-next-line
import { AxiosRequestConfig } from 'axios'

declare module 'axios' {
  interface AxiosRequestConfig {
    custom?: {
      disableMsg: boolean
    }
  }
}
