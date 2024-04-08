<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'

import { categories } from '../categories/categoriesList'
import HomepageCategory from './HomepageCategory.vue'
import ProductListLayout from '../ProductListLayout.vue'

const modules = [Navigation]
</script>

<template>

  <product-list-layout title="DANH MỤC" class="p-0">
    <div class="flex items-center relative">
      <div class="w-full absolute z-10 flex flex-row px-2 justify-between align-items-center">
        <div id="prevCategories">
          <Icon name="material-symbols:chevron-left" class="categoriesBtn" />
        </div>
        <div id="nextCategories">
          <Icon name="material-symbols:chevron-right" class="categoriesBtn" />
        </div>
      </div>
      <swiper
        :navigation="{nextEl: '#nextCategories', prevEl: '#prevCategories'}"
        :modules="modules"
        :autoplay="false"
        :slides-per-view="'auto'"
        class="h-[150px] z-1  mySwiper">

        <swiper-slide v-for="item in categories" :key="item.title">
          <homepage-category :image="item.image" :title="item.title" :path="item.path"></homepage-category>
        </swiper-slide>
      </swiper>

    </div>
  </product-list-layout>

</template>



<style lang="scss" scoped>
.categoriesBtn {
  width: 25px;
  height: 25px;
  opacity: 0.5;
  cursor: pointer;
}

.swiper-slide {
  width: 120px;

}

</style>