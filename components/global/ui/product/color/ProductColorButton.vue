<script setup lang="ts">

import { images } from '@/assets/images/images'

defineProps(['color'])
</script>

<template>
<div class="flex flex-row justify-between items-center p-2 border cursor-pointer">
  <img :src="images.productColor" alt=""
  class="object-contain h-[1rem]"/>
  <span>{{color}}</span>
</div>
</template>

<style scoped lang="scss">

</style>