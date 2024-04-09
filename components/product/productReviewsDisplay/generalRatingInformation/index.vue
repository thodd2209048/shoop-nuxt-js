<script setup lang="ts">

import RatingStarDisplay from './RatingPointDisplay.vue'
import RatingFilter from './RatingFilter.vue'

const ratings = {
  averageRating: 5,
  rate1StarCount: 31,
  rate2StarCount: 31,
  rate3StarCount: 31,
  rate4StarCount: 31,
  rate5StarCount: 2156,
  rateWithCommentCount: 31,
  rateWithImageOrVideoCount: 739
}
</script>

<template>
  <div class="flex flex-row items-center p-7 bg-[#0070060D] gap-12">
    <rating-star-display :averageRatings="ratings.averageRating"></rating-star-display>
    <rating-filter :ratings="ratings"></rating-filter>
  </div>
</template>

<style scoped lang="scss">

</style>