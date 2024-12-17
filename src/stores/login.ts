// stores/userStore.ts
import { defineStore } from 'pinia'
import { login } from '@/api/api'

interface LoginParams {
  username: string
  password: string
}

interface UserState {
  token: string | null
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: null
  }),

  actions: {
    // 登录请求
    async login(data: LoginParams) {
      try {
        const res = await login(data)
        // 假设接口返回的 token 保存在 res.data.token 中
        console.log(res)
        console.log('登录成功:')
      } catch (error) {
        console.error('登录失败:', error)
        throw error
      }
    },

    // 退出登录
    logout() {
      this.token = null
      console.log('退出登录成功')
    }
  },

  getters: {
    isLoggedIn: (state) => !!state.token
  }
})
