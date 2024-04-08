import * as yup from 'yup'

const genders = ['male', 'female', 'others']

export const schema = {
  name: yup.string().min(10).max(30).label('Name'),
  email: yup.string().email().label('Email'),
  address: yup.string().min(10).max(120).label('Address'),
  password: yup.string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Password is invalid')
    .label('Password'),
  isAcceptedTerm: yup.boolean(),
  phone: yup.string(),
  gender: yup.string().oneOf(genders)
}

export const administrativeUnitSchema = {
  province: yup.object().shape({}).label('Province'),
  district: yup.object().shape({}).label('District')
}

export const passwordAndRecheckSchema = yup.object({
  password: schema.password.required('Password is required'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
})
