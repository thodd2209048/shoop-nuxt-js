<script setup lang="ts">

import ProductThumbs from "./ProductThumbs.vue";
</script>

<template>
  <ui-container-wrapper class="px-2 productInformationWrapper bg-white">
    <product-thumbs></product-thumbs>
    <product-product-information-product-details></product-product-information-product-details>
  </ui-container-wrapper>
</template>

<style scoped lang="scss">
.productInformationWrapper {
  display: grid;
  grid-template-columns: 40% 60%;
  width: 100%;
}
</style>