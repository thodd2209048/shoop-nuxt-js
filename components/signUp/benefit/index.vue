<script setup lang="ts">

import BenefitToBecomeSellerDetail from './BenefitToBecomeSellerDetail.vue'
import { images } from '@/assets/images/images'
</script>

<template>
  <div class="flex flex-col text-primary-color py-8 gap-3">
    <p class="text-2xl">Shoop Việt Nam</p>
    <p class="text-2xl font-bold mb-4">Trở thành Người bán
      ngay hôm nay</p>
    <benefit-to-become-seller-detail :image="images.sellerBenefits.store"
                                     content="Nền tảng thương mại điện tử hàng đầu Đông Nam Á"
    ></benefit-to-become-seller-detail>
    <benefit-to-become-seller-detail :image="images.sellerBenefits.present"
                                     content="Phát triển trở thành thương hiệu toàn cầu"
    ></benefit-to-become-seller-detail>
    <benefit-to-become-seller-detail :image="images.sellerBenefits.handshake"
                                     content="Dẫn đầu lượng người dùng trên ứng dụng mua
sắm tại Việt Nam"
    ></benefit-to-become-seller-detail>
  </div>
</template>

<style scoped lang="scss">

</style>