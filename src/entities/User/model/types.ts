import { type Output, type Input } from 'valibot'

import { type UserCredentialsSchema, type UserSchema } from './schemas'

export type tUser = Output<typeof UserSchema>
export type tRawUserData = Input<typeof UserSchema>
export type tUserCredentials = Output<typeof UserCredentialsSchema>

export interface iUserState {
  token: string | null
  data: tUser | null
  isAuthenticated: boolean
}
