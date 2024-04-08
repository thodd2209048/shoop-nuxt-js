<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['tags'])
</script>

<template>
  <div>
    <span v-for="tag in tags"
           :key="tag">
    <a
      :href="tag.link"
      class="productTag hover:text-primary-color">{{ tag.name }}
    </a>
    <span v-if="tag != tags[tags.length - 1]" class="partial p-1">|</span>
  </span>
  </div>

</template>

<style scoped lang="scss">
//.partial {
//  &:last-child {
//    display: none;
//  }
//}

</style>