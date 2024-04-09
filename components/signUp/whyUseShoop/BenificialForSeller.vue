<script setup lang="ts">
defineProps(['image', 'title', 'description'])
</script>

<template>
  <div class="flex flex-col items-center p-3 gap-2">
    <img :src="image" alt="" class="h-[4rem]" />
    <p class="text-center font-bold">{{ title }}</p>
    <p class="text-center">{{ description }}</p>
  </div>
</template>

<style scoped lang="scss">

</style>