<script setup lang="ts">
import { ErrorMessage, Field } from 'vee-validate'

defineProps(['name'])
</script>

<template>
  <div class="flex flex-col w-full">
    <ErrorMessage name="isAcceptedTerm" as="div" class="errorMessage order-3 text-red-600"></ErrorMessage>
    <div>
      <Field type="checkbox" name="isAcceptedTerm" :value="true" class="mr-2 order-1" />
      <label class="order-2 w-full">Đồng ý với Shoop về
        <router-link to="#" class="primaryLink">Điều khoản dịch vụ</router-link>
        &
        <router-link to="/" class="primaryLink">Chính sách bảo mật</router-link>
      </label></div>
  </div>

</template>

<style scoped lang="scss">

</style>