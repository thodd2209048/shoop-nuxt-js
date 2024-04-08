<script setup lang="ts">

import { ref } from 'vue'

const url = ref('')
const onFileChange = (e: any) => {
  if (url.value !== '') URL.revokeObjectURL(url.value)
  const file = e.target.files[0]
  url.value = URL.createObjectURL(file)
}

</script>

<template>
  <div class="flex h-[13rem] w-[13rem] justify-center items-center border rounded-full overflow-hidden">
    <img v-if="url !== '' " :src="url" alt="" />
  </div>
  <label for="image-input"
         class="flex justify-center items-center border rounded w-[8rem] h-[2rem] cursor-pointer hover:bg-gray-100">
    <p>Chọn Ảnh</p>
    <input id="image-input" type="file"
           @change="onFileChange"
           class="hidden" />
  </label>
</template>

<style scoped lang="scss">

</style>