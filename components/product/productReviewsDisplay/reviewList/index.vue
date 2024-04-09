<script setup lang="ts">

import ReviewItem from './ReviewItem.vue'
import { reviewList } from '@/states/product/reviewList'
</script>

<template>
  <div class="pb-8">
    <review-item v-for="(review, index) in reviewList" :key="index"
    :review="review"
    class="reviewItem"></review-item>
  </div>
</template>

<style scoped lang="scss">
.reviewItem{
  border-bottom: 1px solid #0000000D;
}
</style>