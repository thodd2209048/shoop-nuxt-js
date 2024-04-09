<script setup lang="ts">


import ProductDetail  from './ProductDetail.vue'
import { macbookAir2020 } from '@/states/product/MacbookAir2020/LaptopDetail'
import SectionTitle from "~/components/product/SectionTitle.vue";
</script>

<template>
  <section-title title="CHI TIẾT SẢN PHẨM" class="bg-[#00000005]"></section-title>
  <div class="flex flex-col p-2 gap-2">

    <product-detail title="Danh Mục">
      <ui-primary-link to="#">{{ macbookAir2020.category }}</ui-primary-link>
    </product-detail>
    <product-detail title="Thương hiệu">
      <ui-primary-link to="#">{{ macbookAir2020.brand }}</ui-primary-link>
    </product-detail>
    <product-detail title="Loại laptop">
      <span>{{ macbookAir2020.type }}</span>
    </product-detail>
    <product-detail title="Kho hàng">
      <span>{{ macbookAir2020.warehouse }}</span>
    </product-detail>
    <product-detail title="Gửi từ">
      {{ macbookAir2020.warehouseLocation }}
    </product-detail>
  </div>
</template>

<style scoped lang="scss">

</style>