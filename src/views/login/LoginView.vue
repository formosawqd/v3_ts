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
            <div class="login-btn">
              <button class="btn-donate">登录</button>
            </div>
          </a-form-item>
        </a-form>
      </a-card>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import CryptoJS from 'crypto-js'
import type { LoginParams } from '@/types/api'
import { login } from '@/api/api'
import { reactive } from 'vue'

const formState: LoginParams = reactive({
  username: 'admin',
  password: '123456'
})
const onFinish = async () => {
  let params = {
    username: formState.username,
    password: CryptoJS.AES.encrypt(formState.password, 'your-secret-key').toString()
  }
  const res = await login(params)
  console.log(res)
}

const onFinishFailed = (errorInfo: string) => {
  console.log('Failed:', errorInfo)
}
</script>

<style scoped>
/* 设置渐变背景 */
.a-row {
  background: linear-gradient(to right, #6a11cb, #2575fc);
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

/* From Uiverse.io by Allyhere */
.login-btn {
  display: flex;
  justify-content: center;
}
.btn-donate {
  width: 180px;
  --clr-font-main: hsla(0 0% 20% / 100);
  --btn-bg-1: hsla(194 100% 69% / 1);
  --btn-bg-2: hsla(217 100% 56% / 1);
  --btn-bg-color: hsla(360 100% 100% / 1);
  --radii: 0.5em;
  cursor: pointer;
  padding: 0.4em 1em;
  min-width: 120px;
  min-height: 32px;
  font-size: var(--size, 1rem);
  font-weight: 500;
  transition: 0.8s;
  background-size: 280% auto;
  background-image: linear-gradient(
    325deg,
    var(--btn-bg-2) 0%,
    var(--btn-bg-1) 55%,
    var(--btn-bg-2) 90%
  );
  border: none;
  border-radius: var(--radii);
  color: var(--btn-bg-color);
  box-shadow:
    0px 0px 20px rgba(71, 184, 255, 0.5),
    0px 5px 5px -1px rgba(58, 125, 233, 0.25),
    inset 4px 4px 8px rgba(175, 230, 255, 0.5),
    inset -4px -4px 8px rgba(19, 95, 216, 0.35);
}

.btn-donate:hover {
  background-position: right top;
}

.btn-donate:is(:focus, :focus-visible, :active) {
  outline: none;
  box-shadow:
    0 0 0 3px var(--btn-bg-color),
    0 0 0 6px var(--btn-bg-2);
}

@media (prefers-reduced-motion: reduce) {
  .btn-donate {
    transition: linear;
  }
}
</style>
