<script>
import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const thumbsSwiper = ref(null)

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper
    }

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs]
    }
  }
}
</script>

<template>
  <div class="productThumbWrapper px-2">
    <swiper
      :spaceBetween="10"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
    >
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" /></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" /></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" /></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" /></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" /></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" /></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" /></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" /></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" /></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="" /></swiper-slide>
    </swiper>
    <swiper
      :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :navigation="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" /></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" /></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" /></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" /></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" /></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" /></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" /></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" /></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" /></swiper-slide>
      <swiper-slide><img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="" /></swiper-slide>
    </swiper>
  </div>
</template>

<style scoped lang="scss">

.productThumbWrapper{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
