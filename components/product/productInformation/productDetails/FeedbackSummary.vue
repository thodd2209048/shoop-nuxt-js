<script setup lang="ts">


const props = defineProps({
  star: { type: Number, required: true },
  sold: { type: Number, required: true },
  rateCount: { type: Number, required: true }
})


</script>

<template>
  <div class="flex flex-row items-center gap-3 h-[1rem]">
    <div class="flex flex-row items-center gap-1 h-full">
      <span>{{ star }} </span>
      <ui-star-rating-display :star-count="star"></ui-star-rating-display>
    </div>

    <span>{{ rateCount / 1000 }}k Đánh giá</span>
    <span>{{ sold / 1000 }}k Đã bán</span>
  </div>
</template>

<style scoped lang="scss">

</style>