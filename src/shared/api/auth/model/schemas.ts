import { object, string } from 'valibot'

import { UserSchema } from '@entities/User'

export const AuthResponseSchema = object({
  accessToken: string(),
  user: UserSchema
})
