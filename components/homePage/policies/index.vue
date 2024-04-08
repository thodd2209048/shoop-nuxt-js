<script setup lang="ts">
import { images } from '@/assets/images/images.ts'
import HomepagePolicy from './HomepagePolicy.vue'
</script>

<template>
  <div class="container bg-white justify-center gap-4 py-3 px-5 grid md:grid-cols-3">
    <homepage-policy :image="images.policy.returnImages"
                     title="7 ngày miễn phí trả hàng"
                     description="Trả hàng miễn phí trong 7 ngày"
    ></homepage-policy>
    <homepage-policy :image="images.policy.authentic"
                     title="Hàng chính hãng 100%"
                     description="Đảm bảo hàng chính hãng hoặc hoàn tiền gấp đôi"
    ></homepage-policy>
    <homepage-policy :image="images.policy.delivery"
                     title="Miễn phí vận chuyển"
                     description="Giao hàng miễn phí toàn quốc"
    ></homepage-policy>
  </div>
</template>



<style lang="scss" scoped>

</style>