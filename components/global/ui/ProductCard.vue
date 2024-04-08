<script setup lang="ts">
import { convertBigNumberToString } from '@/composable/convertBigNumberToString'
import CustomBtn from "~/components/global/ui/CustomBtn.vue";


const props = defineProps(['item'])
const { image, name, oldPrice, newPrice } = props.item
</script>

<template>
  <div class="max-w-sm w-[300px] p-2">
    <RouterLink to="">
      <img :src="image" alt="" />
    </RouterLink>
    <div class="nameContainer py-2 overflow-hidden"><p class="h-5 font-medium">{{ name }}</p></div>
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-col items-start">
        <p class="text-last-price-color line-through">₫ {{ convertBigNumberToString(oldPrice) }}</p>
        <p class="text-current-price-color text-lg">₫ {{ convertBigNumberToString(newPrice) }}</p>
      </div>
      <custom-btn primary-btn class="w-[40px] h-[40px] primaryBtn rounded-full">
        <Icon name="material-symbols:shopping-cart" />
      </custom-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nameContainer {
  height: 3.6rem;
}

</style>