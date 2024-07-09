<template>
  <div>about</div>
  <div>{{ countStore.count }}</div>
  <a-button type="primary" @click="countStore.increment">点击 </a-button>
  <div>
    <div>
      <a-radio v-model:checked="indexStore.isOpen" :disabled="indexStore.isOpen">Disabled</a-radio>
      <a-radio v-model:checked="checked2" :disabled="disabled">Disabled</a-radio>
      <br />
      <div style="margin-top: 16px">
        <!-- <a-button type="primary" @click="toggleDisabled">Toggle disabled</a-button> -->
        <a-button type="primary" @click="indexStore.toggle">Toggle disabled</a-button>
      </div>

      <a-input ref="inputRef" v-model:value="value" placeholder="请输入" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter'
import { useIndexStore } from '../stores/index'

const countStore = useCounterStore()
const indexStore = useIndexStore()

console.log(countStore.count)

const value = ref<string>('')

const inputRef = ref<HTMLInputElement | null>(null)
console.log('inputRef')

const inputValue = ref('')

const checked1 = ref<boolean>(false)
const checked2 = ref<boolean>(false)
const disabled = ref<boolean>(false)
const toggleDisabled = () => {
  checked1.value = !checked1.value
  disabled.value = !disabled.value
}
</script>

<style scoped></style>
