<script setup lang="ts">
import {images} from "assets/images/images";
</script>

<template>
  <home-page-homepage-hero></home-page-homepage-hero>
  <home-page-policies></home-page-policies>
  <home-page-categories></home-page-categories>
  <home-page-promotion-section :image="images.promotion.sale50"></home-page-promotion-section>
  <home-page-famous-brand></home-page-famous-brand>
  <home-page-promotion-section :image="images.promotion.genuineSale50"></home-page-promotion-section>
  <home-page-sale-products></home-page-sale-products>
  <home-page-promotion-section :image="images.promotion.promotionLovito"></home-page-promotion-section>
  <home-page-today-suggestion></home-page-today-suggestion>
  <home-page-introduce></home-page-introduce>
  <home-page-bottom-categories></home-page-bottom-categories>
</template>

<style scoped lang="scss">

</style>