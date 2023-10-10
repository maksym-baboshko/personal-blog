import { type UserSchema } from '@entities/User'
import { type CounterSchema } from '@entities/Counter'
import { type AuthSchema } from '@features/Authentication'
import { type RequestStatus } from '@shared/constants/store'

import { type EnumAsUnion } from './enum-as-union'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Async reducers
  auth?: AuthSchema
}

export type tSelector<T> = (state: StateSchema) => T
export type tRequestStatus = EnumAsUnion<typeof RequestStatus>
