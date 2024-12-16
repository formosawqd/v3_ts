import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
  type AxiosResponse
} from 'axios'
import type { ApiResponse } from '@/types/api'

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers = config.headers || {}
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    return response.data
  },
  (error) => {
    console.error(error.message || '网络错误')
    return Promise.reject(error)
  }
)

// 封装 GET 请求
export function get<T = any>(
  url: string,
  params?: any,
  config?: InternalAxiosRequestConfig
): Promise<T> {
  return instance.get<T, T>(url, {
    ...config,
    params
  })
}

// 封装 POST 请求
export function post<T = any>(
  url: string,
  data?: any,
  config?: InternalAxiosRequestConfig
): Promise<T> {
  return instance.post<T, T>(url, data, config)
}

export default instance
