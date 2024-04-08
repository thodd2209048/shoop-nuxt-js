<script setup lang="ts">

import {Form} from 'vee-validate'

import TextInput from '@/components/global/input/TextInput.vue'
import CheckBoxAcceptTerm from './CheckBoxAcceptTerm.vue'
import AdministrativeUnitInput from '@/components/global/input/AdministrativeUnitInput.vue'

import {vietnamProvinceDistrictData} from '@/states/vietnamProvinceDistrictData'
import {storeSchemaSignUp} from '@/helper/signUp/storeSchemaSignUp'


const provinces = vietnamProvinceDistrictData.province
const districts = vietnamProvinceDistrictData.district

const initialValues = {
  name: '',
  address: '',
  province: null,
  district: null,
  email: '',
  password: '',
  passwordConfirmation: '',
  isAcceptedTerm: false
}

const onSubmit = (v: object) => {
  console.log('values:', v)
}
</script>

<template>
  <Form v-slot="{values, meta}"
        :validation-schema="storeSchemaSignUp"
        :initial-values="initialValues"
        :on-submit="onSubmit">
    <input-form-wrapper
        title="Đăng ký"
        class="flex flex-wrap gap-4 lg:ml-9 lg:px-4 h-full py-6 bg-white">
      <text-input name="name" type="text" placeholder="Tên cửa hàng"></text-input>

      <div class="flex flex-col lg:flex-row w-full gap-4">
        <administrative-unit-input name="province" :units="provinces"
                                   placeholder="Thành phố"></administrative-unit-input>

        <administrative-unit-input
            name="district"
            :units="values.province === null? [] : districts.filter(d=> d.idProvince === values.province?.idProvince)"
            placeholder="Quận/huyện"></administrative-unit-input>
      </div>

      <text-input name="address" type="text" placeholder="Địa chỉ"></text-input>
      <text-input name="email" type="email" placeholder="Email"></text-input>
      <input-password-input name="password" placeholder="Mật khẩu"></input-password-input>
      <input-password-input name="passwordConfirmation" placeholder="Nhắc lại mật khẩu"></input-password-input>
      <check-box-accept-term></check-box-accept-term>

      <ui-submit-form-button @submit-form="meta.valid && onSubmit(values)"
                             title="ĐĂNG KÝ"
                             type="submit"
                             class="px-3 py-3 w-full"></ui-submit-form-button>

      <div class="w-full text-center"><span>Bạn đã có tài khoản?</span>
        <router-link to="/sign-in" class="primaryLink">Đăng nhập</router-link>
      </div>
    </input-form-wrapper>
  </Form>
</template>

<style scoped lang="scss">

</style>