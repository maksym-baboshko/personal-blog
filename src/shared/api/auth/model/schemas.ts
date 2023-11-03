import { minLength, object, string } from 'valibot'

import { UserSchema } from '@entities/User'

export const AuthResponseSchema = object({
  accessToken: string([minLength(1)]),
  user: UserSchema
})
