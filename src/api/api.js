// src/services/userService.js
import api from './axios'

export const getUsers = () => {
  return api.get('/list')
}
