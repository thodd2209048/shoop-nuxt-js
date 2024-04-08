<script setup lang="ts">

import BenificialForSeller from './BenificialForSeller.vue'
import { beneficialForSeller } from '@/states/signUp/beneficialForSeller'

</script>

<template>
  <div class="container flex flex-col w-full py-8 items-center">
    <p class="mb-4 text-center text-2xl w-[50rem]">TẠI SAO NÊN BÁN HÀNG TRÊN SHOOP</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-3 space-y-5">
      <benificial-for-seller v-for="item in beneficialForSeller"
                             :key="item.title"
                             :image="item.image"
                             :title="item.title"
                             :description="item.description"
      ></benificial-for-seller>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>