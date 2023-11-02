import { minLength, object, string } from 'valibot'

import { UserSchema } from '@entities/User'

import { getAuthSchemaErrorMsg } from '../lib'

export const AuthResponseSchema = object({
  accessToken: string([minLength(1, getAuthSchemaErrorMsg('accessToken is required'))]),
  user: UserSchema
})
