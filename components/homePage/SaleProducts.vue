<script setup lang="ts">
import { ref } from 'vue'

import SwiperProducts from './SwiperProducts.vue'
import ProductListLayout from './ProductListLayout.vue'
import { saleProducts } from '@/states/saleProducts'

const products = ref(saleProducts)
</script>

<template>
  <product-list-layout title="SẢN PHẨM ƯU ĐÃI" class="px-2">
    <swiper-products :items="products" height="420px" slider-identifier="saleProducts">
      <template v-slot="slotProps">
        <ui-product-card :item="slotProps.item" ></ui-product-card>
      </template>
    </swiper-products>
  </product-list-layout>
</template>

<style lang="scss" scoped>

</style>