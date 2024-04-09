<script setup lang="ts">


import { images } from '@/assets/images/images'
</script>

<template>
  <div class="h-full flex justify-center items-center max-w-44">
    <router-link to="/" class="h-full"><img :src="images.logo" alt="" class="h-full"></router-link>
  </div>
</template>

<style lang="scss" scoped>

</style>