<script setup lang="ts">
defineProps(['title'])
</script>

<template>
  <div class="flex flex-col text-center md:text-start mb-8">
    <p class="font-bold text-sm capitalize mb-4">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>