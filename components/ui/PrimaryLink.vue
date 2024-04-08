<script setup lang="ts">
defineProps(['to'])
</script>

<template>
  <router-link :to="to" class="text-primary-color">
    <slot></slot>
  </router-link>
</template>

<style scoped lang="scss">

</style>