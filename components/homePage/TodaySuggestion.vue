<script setup lang="ts">

import ProductListLayout from './ProductListLayout.vue'
import { productSuggestion } from '@/states/productSuggestion.js'
import { ref } from 'vue'

const products = ref(productSuggestion)
</script>

<template>
  <product-list-layout title="GỢI Ý HÔM NAY" class="p-0">
    <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
      <div v-for="(product, idx) in products"
           :key="idx"
           class="flex justify-center items-center">
        <ui-product-card
          :item="product">
        </ui-product-card>
      </div>
    </div>
  </product-list-layout>
</template>


<style lang="scss" scoped>

</style>