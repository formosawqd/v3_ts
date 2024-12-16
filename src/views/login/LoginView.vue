<template>
  <a-row justify="center" align="middle" style="height: 100vh; background-color: #f0f2f5">
    <a-col :span="8">
      <a-card
        title="Login"
        :bordered="false"
        style="border-radius: 12px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1)"
      >
        <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 6 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            label="Username"
            name="username"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input
              v-model:value="formState.username"
              placeholder="Enter your username"
              size="large"
              style="border-radius: 8px"
            />
          </a-form-item>

          <a-form-item
            label="Password"
            name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]"
          >
            <a-input-password
              v-model:value="formState.password"
              placeholder="Enter your password"
              size="large"
              style="border-radius: 8px"
            />
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 6, span: 16 }">
            <a-button
              type="primary"
              html-type="submit"
              block
              size="large"
              style="border-radius: 8px; background-color: #4caf50; border-color: #4caf50"
              @click="logins"
            >
              Submit
            </a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import type { LoginParams } from '@/types/api'
import { login } from '@/api/api'
import { reactive } from 'vue'

const formState: LoginParams = reactive({
  username: 'admin',
  password: '123456'
})

const onFinish = (values: string) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: string) => {
  console.log('Failed:', errorInfo)
}

const logins = async () => {
  const res = await login(formState)
  console.log(res)
}
</script>

<style scoped>
/* 自定义样式 */
.a-card {
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.a-form-item {
  margin-bottom: 20px;
}

.a-button {
  border-radius: 8px;
}
</style>
