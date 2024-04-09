<script setup lang="ts">
defineProps({
  title: { type: String, required: true }
})
</script>

<template>
  <div class="flex justify-start items-center w-full p-2 my-2  ">
    <p class="font-bold">{{ title }}</p>
  </div>
</template>

<style scoped lang="scss">

</style>