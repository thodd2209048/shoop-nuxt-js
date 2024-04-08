<template>
  <NuxtLink class="category bg-white border flex flex-column h-full w-[120px]"
            :to=" '/'+path">
    <img :src="image" alt="" class="h-[84px] w-[84px]"/>
    <p class="text-center">{{ title }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">

const props = defineProps(['image', 'title', 'path'])
</script>

<style lang="scss" scoped>
.category {
  flex-direction: column;
  align-items: center;
}
</style>