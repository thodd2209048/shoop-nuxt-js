<script setup lang="ts">

import ProductDetailWrapper from '../ProductDetailWrapper.vue'
import ChangeQuantitySelected from './ChangeQuantitySelected.vue'

defineProps({
  quantity: { type: Number, required: true }
})
</script>

<template>
  <product-detail-wrapper>
    <p>Số lượng</p>
    <div class="flex items-center gap-3">
      <change-quantity-selected :quantity="quantity"></change-quantity-selected>
      <span>{{ quantity }} sản phẩm có sẵn</span>
    </div>
  </product-detail-wrapper>
</template>

<style scoped lang="scss">

</style>