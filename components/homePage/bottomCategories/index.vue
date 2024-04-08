<script setup lang="ts">

import {
  electronicDeviceTags,
  femaleClothes, healthProductTags,
  maleClothes,
  phonesAndAccessoriesTags,
  watchTags
} from '@/states/productTags'
import CategoryTags from '../CategoryTags.vue'


</script>

<template>
  <div class="bg-white">
    <ui-sub-area-content title="Danh mục" class="container bg-white pt-8 px-2">
      <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-x-3">
        <div>
          <category-tags title="THỜI TRANG NAM" :tags="maleClothes"></category-tags>
          <category-tags title="ĐỒNG HỒ" :tags="watchTags"></category-tags>
        </div>
        <div>
          <category-tags title="THỜI TRANG NỮ" :tags="femaleClothes"></category-tags>
        </div>
        <div>
          <category-tags title="ĐIỆN THOẠI & PHỤ KIỆN" :tags="phonesAndAccessoriesTags"></category-tags>
        </div>
        <div>
          <category-tags title="THIẾT BỊ ĐIỆN TỬ" :tags="electronicDeviceTags"></category-tags>
        </div>
        <div>
          <category-tags title="SỨC KHỎE" :tags="healthProductTags"></category-tags>
        </div>
      </div>
    </ui-sub-area-content>
  </div>
</template>

<style scoped lang="scss">

</style>