<script setup lang="ts">
import { computed } from 'vue'
import { vi } from 'date-fns/locale/vi'
import { formatDistance } from 'date-fns'

import { shop } from '@/states/product/shop'
import ShopGeneralInformation from "./ShopGeneralInformation.vue";
import ShopIndicates from "./ShopIndicates.vue";

const periodNotOnline = computed(() => {
  return formatDistance(Date.now(), shop.lastTimeOnline, {
    locale: vi
  })
})
</script>

<template>
  <ui-product-container-wrapper class="flex flex-row justify-between bg-white">
        <shop-general-information></shop-general-information>
        <shop-indicates></shop-indicates>
  </ui-product-container-wrapper>
</template>

<style scoped lang="scss">
</style>