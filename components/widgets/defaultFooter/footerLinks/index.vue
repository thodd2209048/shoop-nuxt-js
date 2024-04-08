<script setup lang="ts">

import ContainerWrapper from "~/components/widgets/defaultFooter/ContainerWrapper.vue";
import SubAreaWrapper from "~/components/widgets/defaultFooter/SubAreaWrapper.vue";
import {aboutShoopLinks, customerServiceLinks, followUsLinks} from "~/states/footerLinks";
import {paymentMethods} from "~/states/paymentMethods";
</script>

<template>
  <container-wrapper>
    <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 px-2 gap-x-2">
      <sub-area-wrapper title="CHĂM SÓC KHÁCH HÀNG">
        <a v-for="link in customerServiceLinks"
           :key="link.title"
           :href="link.link">
          <p>{{ link.title }}</p>
        </a>
      </sub-area-wrapper>
      <sub-area-wrapper title="VỀ SHOOP">
        <a v-for="link in aboutShoopLinks"
           :key="link.title"
           :href="link.link">
          <p>{{ link.title }}</p>
        </a>
      </sub-area-wrapper>
      <sub-area-wrapper title="THANH TOÁN">
        <div class="grid grid-cols-4 gap-x-1 gap-y-4">
          <router-link v-for="link in paymentMethods"
                       :key="link.title"
                       to="#">
            <img :src="link.image" alt="" />
          </router-link>
        </div>

      </sub-area-wrapper>
      <sub-area-wrapper title="THEO DÕI CHÚNG TÔI TRÊN">
        <a v-for="link in followUsLinks"
           :key="link.title"
           :href="link.link">
          <p>{{ link.title }}</p>
        </a>
      </sub-area-wrapper>
    </div>
  </container-wrapper>
</template>

<style scoped lang="scss">
.wrapper{
  border-color: #0000000D;
}
</style>