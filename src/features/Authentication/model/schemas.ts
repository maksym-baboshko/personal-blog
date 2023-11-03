import { email, minLength, object, string } from 'valibot'

const EmailSchema = string([
  minLength(1, 'auth_form.email.errors.required'),
  email('auth_form.email.errors.email')
])

const PasswordSchema = string([
  minLength(1, 'auth_form.password.errors.required'),
  minLength(8, 'auth_form.password.errors.min')
])

export const AuthCredentialsSchema = object({
  email: EmailSchema,
  password: PasswordSchema
})
