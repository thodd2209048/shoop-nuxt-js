<script setup lang="ts">

import {Swiper, SwiperSlide, useSwiper} from 'swiper/vue'
import {Navigation} from 'swiper/modules'
import ArrowButton from './ArrowButton.vue'

defineProps(['height', 'items', 'sliderIdentifier'])
const modules = [Navigation]


</script>

<template>
  <div class="flex items-center relative h-full">
    <div class="w-full absolute z-10 flex flex-row px-2 justify-between align-items-center">
      <div :class="'prevArrow'+sliderIdentifier">
        <arrow-button></arrow-button>
      </div>
      <div :class="'nextArrow'+ sliderIdentifier">
        <arrow-button style="transform: rotate(180deg);"></arrow-button>
      </div>
    </div>
    <swiper
        :modules="modules"
        :navigation="{nextEl: '.nextArrow'+sliderIdentifier, prevEl: '.prevArrow'+sliderIdentifier,}"
        :autoplay="false"
        :slides-per-view="'auto'"
        :allowSlidePrev="true"
        :allowSlideNext="true"
        :class="'h-full z-1 mySwiper'"
        :space-between="15"
    >

      <swiper-slide v-for="item in items" :key="item.id">
        <slot :item="item"></slot>
      </swiper-slide>
    </swiper>

  </div>
</template>

<style lang="scss" scoped>
.swiper-slide {
  width: 300px
}

</style>