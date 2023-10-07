import { type UserSchema } from '@entities/User'
import { type CounterSchema } from '@entities/Counter'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
}
