<script setup lang="ts">
import { computed, inject, type Ref } from 'vue'

const props = defineProps({
  title: String,
  isTitleCenter: {
    type: Boolean,
    default: false
  },
  hasPrev: Boolean,
  goToPrev: Function
})

const currentIdx = inject('STEP_COUNTER').value++

const formStepIdx = inject('CURRENT_STEP_INDEX') as Ref<number>

const shouldShow = computed(() => {
  return currentIdx === formStepIdx.value
})

</script>

<template>
  <div v-if="shouldShow" class="w-full">
    <div class="relative flex flex-row w-full items-center "
         :style="isTitleCenter? 'text-align: center':''">
      <Icon
        v-if="hasPrev"
        name="material-symbols:arrow-left-alt"
        @click="props.goToPrev"
        class="absolute top-1/2 left-[0.5rem] cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ">

      </Icon>
      <span class="text-2xl w-full">
        {{ title }}
      </span></div>
    <slot></slot>
  </div>
</template>


