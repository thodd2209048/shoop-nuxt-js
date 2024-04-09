<script setup lang="ts">
import { Field } from 'vee-validate'
import type { PropType } from 'vue'

interface Gender {
  value: String,
  label: String
}

defineProps({
  fieldName: { type: String, required: true },
  options: { type: Array as PropType<Gender[]>, required: true }
})

</script>

<template>
  <div class="flex flex-row gap-2 ">
    <div v-for="(option, index) in options" :key="index"
         class="flex flex-row gap-1">
      <Field
        :name="fieldName"
        type="radio"
        :value="option.value"

      >
      </Field>
      <label>{{ option.label }}</label>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>