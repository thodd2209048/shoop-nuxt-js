<script setup lang="ts">

import { computed } from 'vue'
import CustomBtn from "~/components/global/ui/CustomBtn.vue";

const props = defineProps({
  title: { type: String, required: true },
  ratingCount: { type: Number }
})

const ratingCountString = computed(() => {
  if (!props.ratingCount) return
  if (props.ratingCount < 1000) return props.ratingCount.toString()
  return (Math.round(props.ratingCount / 1000 * 10) / 10).toString() + 'k'
})


</script>

<template>
  <custom-btn :title="title" class="border rounded h-[2rem] py-2 px-6 bg-white">
    <span v-if="props.ratingCount"
    class="ml-2">({{ ratingCountString }})</span>
  </custom-btn>
</template>

<style scoped lang="scss">

</style>