interface ApiResponse<T = any> {
  data: T,
  status: number;
  statusText: string;
}

// 定义登录接口参数类型
export interface LoginParams {
  username: string
  password: string,
}

export interface LoginResponse {
  token: string
  message: string
  role: string
  token: string
  permissions: Array
}
