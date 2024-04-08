<script setup lang="ts">

defineProps(['image'])

</script>

<template>
  <div class="container p-0">
    <img :src="image" alt="" class="rounded-3 w-full" />
  </div>
</template>



<style lang="scss" scoped>

</style>