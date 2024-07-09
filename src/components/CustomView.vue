<template>
  <div @click="postMsg">custom 组件</div>
</template>

<script setup lang="ts">
import { emit } from 'process'

const prop = defineProps({
  msg: {
    type: String
  }
})
console.log(prop.msg)

const emeits = defineEmits({})

const postMsg = () => {}
</script>

<style scoped></style>
