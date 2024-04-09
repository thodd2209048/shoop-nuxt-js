<script setup lang="ts">
import { Form } from 'vee-validate'

import InputFormLayout from '../InputFormLayout.vue'
import { signInSchema } from '@/helper/signIn/signInSchema'

const handleSubmit = (v:any) => {
  if(v.email === 'techzone@gmail.com' && v.password === 'Qwe@@@123') {
    navigateTo("/manage-shop/techzone")
  }
}


</script>

<template>
  <Form
    v-slot="{values, meta}"
    :validation-schema="signInSchema"
    :on-submit="handleSubmit"
    class="my-6 mx-3 ">
    <input-form-layout title="Đăng nhập" class="h-full py-6">
      <input-text-input name="email"
                  placeholder="Email"
                  type="email"
      ></input-text-input>
      <input-password-input name="password"
                      placeholder="Mật khẩu"
      ></input-password-input>
      <div class="flex flex-row w-full justify-end">
        <router-link
          to="forget-password"
          class="primaryLink self-center">
          <span>Quên mật khẩu</span>
        </router-link>
      </div>
      <ui-submit-form-button
        @submit-form="meta.valid && handleSubmit(values)"
        title="ĐĂNG NHẬP"
        type="submit"
        class="mt-4"
      ></ui-submit-form-button>
      <div class="flex flex-row w-full mt-4 justify-center text-center">
        <p>Bạn mới biết đến Shoop?
          <router-link to="/sign-up" class="primaryLink">
            Đăng ký
          </router-link>
        </p>
      </div>
    </input-form-layout>

  </Form>
</template>

<style scoped lang="scss">

</style>