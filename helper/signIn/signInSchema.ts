import * as Yup from "yup"
import { schema } from '@/helper/global/validators/schemas'

export const signInSchema = Yup.object({
  email: schema.email.required(),
  password: schema.password.required()
})