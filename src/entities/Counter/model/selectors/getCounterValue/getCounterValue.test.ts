import { type DeepPartial } from '@reduxjs/toolkit'

import { type RootState } from '@shared/types'

import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
  it('should return counter value', () => {
    const state: DeepPartial<RootState> = { counter: { value: 42 } }

    expect(getCounterValue(state as RootState)).toEqual(42)
  })
})
