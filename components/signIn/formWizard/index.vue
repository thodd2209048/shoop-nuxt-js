<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { useForm } from 'vee-validate'

const props = defineProps({
  prevRoute: {
    type: String
  },
  validationSchema: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['requireResetPassword'])

const currentStepIdx = ref(0)
const stepCounter = ref(0)

provide('STEP_COUNTER', stepCounter)
provide('CURRENT_STEP_INDEX', currentStepIdx)

const isLastStep = computed(() => {
  return currentStepIdx.value === stepCounter.value - 1
})

const hasPrevStep = computed(() => {
  return currentStepIdx.value > 0
})

const currentSchema = computed(() => {
  return props.validationSchema[currentStepIdx.value]
})

const hasPrev = computed(() => {
  return hasPrevStep.value || !!props.prevRoute
})

const { values, handleSubmit } = useForm(
  {
    validationSchema: currentSchema,
    keepValuesOnUnmount: true
  }
)

const onSubmit = handleSubmit(() => {
  if (!isLastStep.value) {
    currentStepIdx.value++
    return
  }
  emit('requireResetPassword', values)
})

const goToPrev = () => {
  if (hasPrevStep.value) {
    currentStepIdx.value--;
    return;
  }
  if (props.prevRoute) navigateTo(props.prevRoute)
}
</script>

<template>
  <form
    @submit="onSubmit"
    class="relative flex flex-wrap gap-4 px-4 py-4 bg-white border rounded">

    <slot name="step" :hasPrev="hasPrev" :goToPrev="goToPrev"></slot>
    <ui-submit-form-button
      type="submit"
      class="mt-3"
      :title="isLastStep? 'Submit': 'Next'"
      ></ui-submit-form-button>
  </form>
</template>
<style scoped>

</style>