<script setup lang="ts">
import ProductDetailWrapper from "~/components/global/ui/product/ProductDetailWrapper.vue";
</script>

<template>
<product-detail-wrapper>
  <p>Vận chuyển</p>
  <div>
    <p>Xử lý đơn hàng bởi Shoop</p>
    <p>Miễn phí vận chuyển</p>
    <div class="flex flex-row gap-3">
      <p class="text-gray-400">Vận Chuyển Tới</p>
      <button>Huyện Ba Vì <Icon name="material-symbols:keyboard-arrow-down"/></button>
    </div>
    <div class="flex flex-row gap-3">
      <p class="text-gray-400">Phí Vận Chuyển</p>
      <button>đ0 <Icon name="material-symbols:keyboard-arrow-down"/></button>
    </div>
  </div>
</product-detail-wrapper>
</template>

<style scoped lang="scss">

</style>