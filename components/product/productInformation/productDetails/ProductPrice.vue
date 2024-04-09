<script setup lang="ts">
defineProps({
  currentPrice: {type: Number, required: true},
  lastPrice: Number
})
</script>

<template>
<div class="flex flex-row gap-8 px-[2vw] py-4 items-center bg-[#E0E0E0]">
  <span v-if="lastPrice"
        class="text-gray-400 line-through text-xl"
  >{{Intl.NumberFormat('vi-vn', { maximumSignificantDigits: 3 }).format(lastPrice,)}}đ</span>
  <span
    class="text-primary-color text-4xl"
  >{{Intl.NumberFormat('vi-vn', { maximumSignificantDigits: 3 }).format(currentPrice,)}}đ</span>
  <div v-if="lastPrice" class="flex h-[1.4rem] bg-primary-color text-white justify-center items-center p-1">
    {{ Math.round(currentPrice / lastPrice * 100) }}% GIẢM
  </div>
</div>
</template>

<style scoped lang="scss">

</style>