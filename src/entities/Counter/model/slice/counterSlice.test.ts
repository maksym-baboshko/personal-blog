import { type DeepPartial } from '@reduxjs/toolkit'

import { type CounterSchema } from '../types'

import { counterActions, counterReducer } from './counterSlice'

describe('counterSlice', () => {
  it('should return initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0
    })
  })

  it('should handle increment', () => {
    const state: DeepPartial<CounterSchema> = { value: 42 }
    expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({
      value: 43
    })
  })

  it('should handle decrement', () => {
    const state: DeepPartial<CounterSchema> = { value: 42 }
    expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({
      value: 41
    })
  })
})
