import * as yup from 'yup'
import { administrativeUnitSchema, schema } from '../global/validators/schemas'

export const storeSchemaSignUp = yup.object().shape({
  name: schema.name.required('Name is required'),
  email: schema.email.required('Email is required'),
  province: administrativeUnitSchema.province.required('Province is required'),
  district: administrativeUnitSchema.district.required('District is required'),
  address: schema.address.required('Address is required'),
  password: schema.password.required('Password is required'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
  isAcceptedTerm: schema.isAcceptedTerm.required('Vui lòng đọc kỹ các chính sách này và nhấp vào nút "Đồng ý" để tiếp tục.')
})