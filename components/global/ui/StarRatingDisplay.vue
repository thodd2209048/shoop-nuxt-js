<script setup lang="ts">

import { images } from '@/assets/images/images'
import { computed } from 'vue'

const props = defineProps({
  starCount: { type: Number, required: true }
})

const starRounded = computed(() => Math.round(props.starCount))
</script>

<template>

  <div class="flex flex-row items-center h-full">
    <img v-for="i in starRounded" :key="i" :src="images.star" alt="" class="h-full" />
  </div>
</template>

<style scoped lang="scss">

</style>