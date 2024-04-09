<script setup lang="ts">
import ProductDetailWrapper from '../ProductDetailWrapper.vue'
import type { PropType } from 'vue'
import ProductColorButton  from './ProductColorButton.vue'

defineProps({
  colors: {type: Array as PropType<String[]>}
})
</script>

<template>
  <product-detail-wrapper>
    <p>Màu sắc</p>
    <div class="flex flex-wrap gap-2">
      <product-color-button
      v-for="color in colors" :key="color" :color="color"
      ></product-color-button>
    </div>
  </product-detail-wrapper>
</template>

<style scoped lang="scss">

</style>