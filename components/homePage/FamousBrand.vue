<script setup lang="ts">
import { ref } from 'vue'

import ProductListLayout from './ProductListLayout.vue'
import SwiperProducts from './SwiperProducts.vue'
import { famousBrandProducts } from '@/states/famousBrandProducts'

const products = ref(famousBrandProducts)
</script>

<template>
  <product-list-layout title="THƯƠNG HIỆU NỔI BẬT" class="px-2">
    <swiper-products :items="products" height="420px" slider-identifier="famousBrand">
      <template v-slot="slotProps">
        <ui-product-card :item="slotProps.item"></ui-product-card>
      </template>
    </swiper-products>
  </product-list-layout>
</template>


<style lang="scss" scoped>

</style>