<script setup lang="ts">

import ImageBackground from './ImageBackground.vue'

defineProps({
  name: { type: String, required: true }
})
</script>

<template>
  <image-background>
    <p class="text-xl text-white">{{ name.charAt(0) }}</p>
  </image-background>
</template>

<style scoped lang="scss">

</style>