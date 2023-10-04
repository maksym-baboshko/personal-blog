import { type DeepPartial } from '@reduxjs/toolkit'

import { type StateSchema } from '@shared/types'

import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
  it('should return counter value', () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 42 } }
    expect(getCounterValue(state as StateSchema)).toEqual(42)
  })
})
