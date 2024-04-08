<script setup lang="ts">

const props = defineProps(['title', 'tags'])
</script>

<template>
  <div class="mt-6">
    <p class="font-bold mb-2" >{{ title }}</p>
    <ui-tag-list :tags="tags"></ui-tag-list>
  </div>
</template>

<style scoped lang="scss">

</style>