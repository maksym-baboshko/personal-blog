import { type counterReducer } from '../slice'

export interface CounterSchema {
  value: number
}

export type CounterReducer = ReturnType<typeof counterReducer>
