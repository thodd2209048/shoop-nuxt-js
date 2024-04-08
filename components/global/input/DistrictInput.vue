<script setup lang="ts">

import { vietnamProvinceDistrictData } from '@/states/districts/vietnamProvinceDistrictData'
import { ErrorMessage, Field, useForm } from 'vee-validate'

defineProps(['provinceFieldName', 'districtFieldName'])

const provinces = vietnamProvinceDistrictData.province
const districts = vietnamProvinceDistrictData.district

const { values } = useForm()
</script>

<template>
  <div class="w-full gap-4">
    <div class="flex flex-col w-full md:mb-0">
      <ErrorMessage name="province" as="div" class="errorMessage order-2 text-red-600" />
      <Field name="province"
             as="select"
             class="order-1 appearance-none w-full px-2 py-1 border rounded focus:shadow-outline focus:bg-white focus:border-primary-color focus-visible:outline-none">
        <option disabled selected value="" class="defaultOptionStyle">Thành phố</option>
        <option v-for="province in provinces"
                :key="province.idProvince"
                :value="province">{{ province.name }}
        </option>
      </Field>
    </div>

    <div class="flex flex-col w-full md:mb-0">
      <ErrorMessage name="district" as="div" class="errorMessage order-2 text-red-600" />
      <Field name="district"
             as="select"
             class="order-1 appearance-none w-full px-2 py-1 border rounded focus:shadow-outline focus:bg-white focus:border-primary-color focus-visible:outline-none">
        <option disabled selected value="" class="defaultOptionStyle">Quận/huyện</option>
        <option v-for="district in districts.filter(d => d.idProvince === values.province)"
                :key="district.idDistrict"
                :value="district">{{ district.name }}
        </option>
      </Field>
    </div>
  </div>
</template>

<style scoped lang="scss">
select:invalid {
  color: red;
}
</style>