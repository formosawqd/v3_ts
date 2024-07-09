<template>
  <div>
    <a-button type="primary" @click="handleClick">Click me!</a-button>
    <div class="box">
      <span>span</span>
    </div>
    <h1>User List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.age }} - {{ user.address }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue' // 导入 ref 和 onMounted
import { getUsers } from '@/api/api'
import { message } from 'ant-design-vue'

const handleClick = () => {
  message.success('Button clicked!')
}
const users = ref([]) // 使用 ref 创建响应式数据

// 在组件挂载时发送请求

const getList = async () => {
  try {
    const response = await getUsers() // 发送 GET 请求
    console.log(response)
    users.value = response // 更新用户数据
  } catch (error) {
    console.error('Failed to fetch users', error)
  }
}
onMounted(getList)

// 返回响应式数据和需要暴露给模板的数据和方法
</script>

<style scoped lang="scss">
.box {
  width: 20px;
  height: 20px;
  background-color: $color-green;
  span {
    color: red;
  }
}
</style>
