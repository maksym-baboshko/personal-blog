import { type DeepPartial } from '@reduxjs/toolkit'

import { type StateSchema } from '@shared/types'

import { getCounter } from './getCounter'

describe('getCounter', () => {
  it('should return counter state', () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 42 } }
    expect(getCounter(state as StateSchema)).toEqual({ value: 42 })
  })
})
