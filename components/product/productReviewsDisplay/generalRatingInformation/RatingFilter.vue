<script setup lang="ts">
import type { PropType } from 'vue'
import RatingFilterBtn from './RatingFilterBtn.vue'

interface Ratings {
  rate1StarCount: Number,
  rate2StarCount: Number,
  rate3StarCount: Number,
  rate4StarCount: Number,
  rate5StarCount: Number,
  rateWithCommentCount: Number,
  rateWithImageOrVideoCount: Number
}

defineProps({
  ratings: { type: Object as PropType<Ratings>, required: true }
})
</script>

<template>
  <div class="flex flex-row gap-4 flex-wrap">
    <rating-filter-btn title="Tất Cả"></rating-filter-btn>
    <rating-filter-btn title="5 Sao" :rating-count="ratings.rate5StarCount"></rating-filter-btn>
    <rating-filter-btn title="4 Sao" :rating-count="ratings.rate4StarCount"></rating-filter-btn>
    <rating-filter-btn title="3 Sao" :rating-count="ratings.rate3StarCount"></rating-filter-btn>
    <rating-filter-btn title="2 Sao" :rating-count="ratings.rate2StarCount"></rating-filter-btn>
    <rating-filter-btn title="Có bình luận" :rating-count="ratings.rateWithCommentCount"></rating-filter-btn>
    <rating-filter-btn title="Có Hình Ảnh / Video"
                       :rating-count="ratings.rateWithImageOrVideoCount"></rating-filter-btn>
  </div>
</template>

<style scoped lang="scss">

</style>