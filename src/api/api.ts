// import { get, post } from './axios'
import axios from './axios'
import type { LoginParams, LoginResponse } from '@/types/api'
export interface UserParams {
  page: number
  limit: number
}

export interface User {
  id: number
  name: string
  email: string
}

// 用户登录
export function login(data: LoginParams) {
  return axios.post<LoginResponse>('/login', data)
}
