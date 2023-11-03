import { type Output, type Input } from 'valibot'

import { type UserSchema } from './schemas'

export type tUser = Output<typeof UserSchema>
export type tRawUserData = Input<typeof UserSchema>

export interface iUserState {
  token: string | null
  data: tUser | null
  isAuthenticated: boolean
}
