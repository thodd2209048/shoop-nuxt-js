<script setup lang="ts">


defineProps({
  averageRatings: { type: Number, required: true }
})
</script>

<template>
  <div class="flex flex-col shrink-0 items-center gap-2">
    <div>
      <span class="text-primary-color text-5xl">{{ averageRatings.toFixed(1) }}</span>
      <span class="text-primary-color text-2xl"> trên 5</span>
    </div>
    <div class="h-[1.5rem]">
      <ui-star-rating-display :starCount="averageRatings"></ui-star-rating-display>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>