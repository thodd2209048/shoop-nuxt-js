<script setup lang="ts">

import type { ButtonHTMLAttributes, PropType } from 'vue'

defineProps({
  handleSubmit: Function,
  title: String,
  btnIcon: Node,
  type: {
    type: String as PropType<ButtonHTMLAttributes['type']>,
    default: 'button'
  },
})

const emit = defineEmits(['submitForm'])
</script>

<template>
  <ui-custom-btn class="px-3 py-3 w-full primaryBtn rounded"
                  @click="emit('submitForm')"
                  :title="title"
                  :btn-icon="btnIcon"
                  :type="type"></ui-custom-btn>
</template>

<style scoped lang="scss">

</style>