import * as Yup from "yup"
import { schema } from '@/helper/global/validators/schemas'

export const emailSchema = Yup.object({
  email: schema.email.required()
})
