<script setup lang="ts">


defineProps({
  title: String,
  isTitleCenter: {
    type: Boolean,
    default: false
  },
  hasArrowLeft: {
    type: Boolean,
    default: false
  },
  prevRoute: {
    type: String
  }
})
</script>

<template>
  <div class="flex flex-wrap gap-4 px-4 py-4 bg-white border rounded">
    <div class="relative flex flex-row w-full items-center "
         :style="isTitleCenter? 'text-align: center':''">
      <router-link v-if="hasArrowLeft" :to="prevRoute"
      class="absolute top-1/2 left-[0.5rem] transform -translate-x-1/2 -translate-y-1/2 ">
        <Icon name="material-symbols:arrow-left-alt"></Icon>
      </router-link>
      <span class="text-2xl w-full"
      >
        {{ title }}
      </span></div>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>