import axios from 'axios'

// 创建 axios 实例
const instance = axios.create({
  baseURL: '/api', // 基础请求 URL
  timeout: 5000 // 请求超时时间
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在请求发送之前做一些处理，例如添加授权头
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做一些处理
    return response.data
  },
  (error) => {
    // 处理响应错误
    if (error.response) {
      // 服务器返回的错误码
      console.error('Response error', error.response.status, error.response.data)
    } else if (error.request) {
      // 请求已发送但没有收到响应
      console.error('Request error', error.request)
    } else {
      // 其他错误
      console.error('Error', error.message)
    }
    return Promise.reject(error)
  }
)

export default instance
