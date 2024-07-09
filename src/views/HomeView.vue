<template>
  <div>
    <CustomView :msg="msg"></CustomView>
  </div>
</template>

<script setup lang="ts">
import CustomView from '@/components/CustomView.vue'
import { ref } from 'vue'
const msg = ref('父组件的msg')
</script>

<style scoped></style>
