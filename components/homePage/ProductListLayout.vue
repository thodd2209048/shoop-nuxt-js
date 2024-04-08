<template>
  <div class="container flex flex-col bg-white ">
    <div class="h-[60px] px-2 flex flex-col justify-center">
      <p class="text-2xl font-bold ">{{ title }}</p>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps(['title'])
</script>

<style lang="scss" scoped>

</style>