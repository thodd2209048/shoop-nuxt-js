<script setup lang="ts">

import { ErrorMessage, Field, useField, useForm } from 'vee-validate'

const props = defineProps(['name', 'units', 'placeholder'])

</script>

<template>
  <div class="flex flex-col w-full  md:mb-0">
    <ErrorMessage :name="name" as="div" class="errorMessage order-2 text-red-600" />
    <Field :name="name"
           as="div"
           class="order-1 appearance-none w-full focus:shadow-outline focus:bg-white focus:border-primary-color focus-visible:outline-none">
      <select :name="name" class="focus-visible:outline-none w-full px-2 py-1 border rounded">
        <option disabled selected value="" class="defaultOptionStyle w-full">{{ placeholder }}</option>
        <option v-for="(unit, idx) in units"
                :key="idx"
                :value="unit"
        >{{ unit.name }}
        </option>
      </select>
    </Field>
  </div>

</template>

<style scoped lang="scss">
.errorMessage + select {
  border-color: var(--error-color);
}
</style>