<script setup lang="ts">

import { emailSchema } from '~/helper/signIn/emailSchema'
import { passwordAndRecheckSchema } from '~/helper/global/validators/schemas'
import FormStep from "~/components/signIn/formWizard/FormStep.vue";

defineProps({
  title: String,
  isTitleCenter: {
    type: Boolean,
    default: false
  }
})

definePageMeta({
  layout: 'sign-in'
})
const handleSubmit = (v: object) => {
  console.log("submit")
  console.log('values: ', v)
}

const schema = [
  emailSchema, passwordAndRecheckSchema
]

</script>

<template>
  <div class="flex justify-center p-10 bg-background-pink"
  >
    <sign-in-form-wizard
      prev-route="/sign-in"
      :validation-schema="schema"
      @require-reset-password="handleSubmit($event)"
      class="flex flex-wrap gap-4 px-4 py-4 bg-white border rounded">
      <template v-slot:step="{hasPrev, goToPrev}">
        <FormStep
          title="Đặt lại mật khẩu" is-title-center
          :has-prev="hasPrev"
          :go-to-prev="goToPrev"
        >
          <input-text-input type="email"
                      name="email"
                      placeholder="Email"
                      class="mt-5"
          ></input-text-input>

        </FormStep>
        <FormStep
          title="Đặt lại mật khẩu" is-title-center
          :has-prev="hasPrev"
          :go-to-prev="goToPrev"
        >
          <input-password-input
            name="password"
            placeholder="Mật khẩu"
            class="mt-5"
          ></input-password-input>
          <input-password-input
            name="passwordConfirmation"
            placeholder="Mật khẩu"
            class="mt-5"
          ></input-password-input>
        </FormStep>
      </template>
    </sign-in-form-wizard>
  </div>
</template>

<style scoped lang="scss">

</style>