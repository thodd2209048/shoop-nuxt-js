<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { ref } from 'vue'
import { images } from '@/assets/images/images'


const modules = [Autoplay, Pagination]
const textBase = ref([
  {
    description: 'picture 1',
    img: images.hero
  },
  {
    description: 'picture 2',
    img: images.hero
  },
  {
    description: 'picture 3',
    img: images.hero
  },
  {
    description: 'picture 4',
    img: images.hero
  }
])


</script>

<template>
  <div
    class="heroContainer container mx-auto p-0">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :loop="true"
      :pagination="{clickable: true}"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }"
      space-between="0"
    >
      <swiper-slide v-for="item in textBase" :key="item.description"
      >
        <img :src="item.img" alt="" class="w-full" />
      </swiper-slide>
    </swiper>
  </div>
</template>


<style lang="scss" scoped>
.heroContainer {
  max-height: 100%;
}
</style>
