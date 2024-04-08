<template>
  <div class="flex flex-row items-center justify-start md:justify-center">
    <img :src="image" alt="" class="h-[56px]">
    <div class="flex flex-col px-2">
      <span class="font-medium">{{title}}</span>
      <span class="text-sm">{{description}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['image', 'title', 'description'])
</script>

<style lang="scss" scoped>

</style>