<script setup lang="ts">

import {othersProductOfShop} from '@/states/product/othersProductOfShop'
</script>

<template>
  <div class="flex flex-row">
    <ui-product-card v-for="(product, index) in othersProductOfShop" :key="index"
                  :item="product"
    ></ui-product-card>
  </div>
</template>

<style scoped lang="scss">

</style>