<script setup lang="ts">
import { computed } from 'vue'
import { formatDistance } from 'date-fns'
import { vi } from 'date-fns/locale/vi'

import { shop } from '@/states/product/shop'
import ShopIndicate from './ShopIndicate.vue'

const periodJoinShoop = computed(() => {
  return formatDistance(Date.now(), shop.signUpTime, {
    locale: vi
  })
})
</script>

<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 p-2 gap-x-8">
    <shop-indicate title="Đánh Giá"
                    :value="(Math.round(shop.reviewsCount/1000*10)/10).toString() +'k'">
    </shop-indicate>
        <shop-indicate title="Sản Phẩm"
                        :value="shop.productCount.toString()">
        </shop-indicate>
        <shop-indicate title="Tỉ Lệ Phản Hồi"
                        :value="(shop.responseRate*100).toString()+ ' %'">
        </shop-indicate>
        <shop-indicate title="Thời Gian Phản Hồi"
                        :value="shop.responseDelay.toString()">
        </shop-indicate>
        <shop-indicate title="Tham Gia"
                        :value="periodJoinShoop.toString()">
        </shop-indicate>
        <shop-indicate title="Người Theo Dõi"
                        :value="(Math.round(shop.followerCount/1000)).toString()+'k'">
        </shop-indicate>
  </div>
</template>

<style scoped lang="scss">

</style>