<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  value: { type: String, required: true }
})
</script>

<template>
  <div class="flex flex-row justify-between">
    <span>{{ title }}</span>
    <span class="text-primary-color">{{ value }}</span>
  </div>
</template>

<style scoped lang="scss">

</style>