<script setup lang="ts">
import { computed } from 'vue'
import { formatDistance } from 'date-fns'
import { vi } from 'date-fns/locale/vi'

import { shop } from '@/states/product/shop'
import CustomBtn from "~/components/global/ui/CustomBtn.vue";

const periodNotOnline = computed(() => {
  return formatDistance(Date.now(), shop.lastTimeOnline, {
    locale: vi
  })
})
</script>

<template>
  <div class="relative flex flex-row w-1/4 px-2 gap-2">
    <div class="flex aspect-square p-2 ">
      <div
        class="flex justify-center items-center aspect-square h-full rounded-full overflow-hidden bg-primary-color">
        <img v-if="shop.image" :src="shop.image" alt="" />
        <p v-else class="text-4xl text-white">{{ shop.name.charAt(0) }}</p>
      </div>
    </div>
    <div class="flex flex-col justify-center gap-1">
      <p>{{ shop.name }}</p>
      <p class="text-gray-400 text-sm">Online {{ periodNotOnline }} Trước</p>
      <div class="flex flex-row gap-2">
        <custom-btn secondaryBtn class="p-2">Chat Ngay</custom-btn>
        <custom-btn greyBtn class="p-2">Xem Shop</custom-btn>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>