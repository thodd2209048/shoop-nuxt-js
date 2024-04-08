<script setup lang="ts">
const props = defineProps(['image', 'content'])
</script>

<template>
  <div class="flex flex-row">
    <img :src="image" alt="" class="h-[45px] w-[45px] mr-4"/>
    <p class="text-primary-color text-base">{{content}}</p>
  </div>
</template>

<style scoped lang="scss">

</style>