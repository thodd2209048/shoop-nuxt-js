<script setup lang="ts">

import { ErrorMessage, Field } from 'vee-validate'
import { errorStyle, fieldStyle, groupFieldStyle } from '@/composable/inputStyles'

defineProps({
  name: {
    type: String,
  },
  type: {
    type: String,
    validator(value: string) {
      return ['text', 'email', 'password', 'select'].includes(value)
    }
  },
  placeholder: {
    type: String
  },
  as: String
})

</script>

<template>
  <div class="flex flex-col w-full md:mb-0">
    <ErrorMessage :name="name" as="div" class="errorMessage order-2 text-red-600" />
    <Field :name="name"
           :type="type"
           :as="as"
           :placeholder="placeholder"
           class="order-1 appearance-none w-full px-2 py-1 border rounded focus:shadow-outline focus:bg-white focus:border-primary-color"
>
    </Field>
  </div>
</template>

<style scoped lang="scss">
.errorMessage + input {
  border-color: var(--error-color);
}
</style>