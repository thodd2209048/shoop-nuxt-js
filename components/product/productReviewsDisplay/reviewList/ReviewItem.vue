<script setup lang="ts">
import type { PropType } from 'vue'
import { images } from '@/states/product/assets/images'

interface Review {
  user: String,
  avatar: String,
  rating: Number,
  ratingTime: String,
  description: String,
  comment: String,
  images: String[]
}

defineProps({
  review: {type: Object as PropType<Review>, required: true}
})
</script>

<template>
<div class="flex flex-row py-4 gap-4">
  <img v-if="review.avatar" :src="review.avatar.toString()" alt=""/>
  <ui-default-avatar v-else :name="review.user"></ui-default-avatar>
  <div class="flex flex-col">
    <p class="mb-2">{{review.user}}</p>
    <div class="h-[1.5rem] mb-2">
      <ui-star-rating-display :star-count="review.rating"></ui-star-rating-display>
    </div>
    <p class="mb-3"><span>{{review.ratingTime}} | {{review.description}}</span></p>
    <p class="mb-3">{{review.comment}}</p>
    <div class="flex flex-row gap-4">
      <img v-for="(i, index) in review.images" :key="index"
           :src="i.toString()" alt=""/>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>