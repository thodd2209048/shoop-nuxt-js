<script setup lang="ts">

import {macbookAir2020 as product} from '@/states/product/MacbookAir2020/LaptopDetail'
import FeedbackSummary from "./FeedbackSummary.vue";
import ProductPrice from "~/components/product/productInformation/productDetails/ProductPrice.vue";
import TransportMethod from "~/components/product/productInformation/productDetails/TransportMethod.vue";

</script>

<template>
  <div class="flex flex-col p-3 gap-4">
    <p class="font-medium">{{ product.name }}</p>
    <div class="flex flex-row justify-between">
      <feedback-summary
          :rate-count="product.feedback.rateCount"
          :sold="product.feedback.sold"
          :star="product.feedback.star">

      </feedback-summary>
      <router-link to="/report-page">Tố cáo</router-link>
    </div>
        <product-price
            :current-price="product.currentPrice"
            :last-price="product.lastPrice">
        </product-price>
        <transport-method></transport-method>
        <ui-product-color :colors="product.color"></ui-product-color>
        <ui-product-quantity-selected :quantity="product.quantity"></ui-product-quantity-selected>
        <ui-product-action-buttons></ui-product-action-buttons>
  </div>
</template>

<style scoped lang="scss">

</style>