<template>
  <a-row
    justify="center"
    align="middle"
    style="height: 100vh; background: linear-gradient(to right, #6a11cb, #2575fc)"
  >
    <a-col :span="8">
      <a-card
        title="Login"
        :bordered="false"
        style="
          border-radius: 20px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          background-color: rgba(255, 255, 255, 0.9);
        "
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
            style="margin-bottom: 20px"
          >
            <a-input
              v-model:value="formState.username"
              placeholder="Enter your username"
              size="large"
              style="border-radius: 10px; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1)"
            />
          </a-form-item>

          <a-form-item
            label="Password"
            name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]"
            style="margin-bottom: 30px"
          >
            <a-input-password
              v-model:value="formState.password"
              placeholder="Enter your password"
              size="large"
              style="border-radius: 10px; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1)"
            />
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 6, span: 16 }">
            <a-button
              type="primary"
              html-type="submit"
              block
              size="large"
              style="
                border-radius: 8px;
                background-color: #4caf50;
                border-color: #4caf50;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              "
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

const onFinish = async () => {
  const res = await login(formState)
  console.log(res)
}

const onFinishFailed = (errorInfo: string) => {
  console.log('Failed:', errorInfo)
}
</script>

<style scoped>
/* 设置渐变背景 */
.a-row {
  background: linear-gradient(to right, #6a11cb, #2575fc); /* 渐变颜色 */
}

.a-card {
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.9); /* 半透明的背景 */
}

.a-form-item {
  margin-bottom: 30px;
}

.a-button {
  border-radius: 8px;
  background-color: #4caf50;
  border-color: #4caf50;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.a-button:hover {
  background-color: #45a049;
  border-color: #45a049;
  transform: translateY(-2px);
}

.a-button:active {
  background-color: #388e3c;
  border-color: #388e3c;
  transform: translateY(0);
}

.a-input,
.a-input-password {
  border-radius: 10px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
