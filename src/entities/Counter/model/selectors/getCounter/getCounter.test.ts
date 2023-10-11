import { type DeepPartial } from '@reduxjs/toolkit'

import { type RootState } from '@shared/types'

import { getCounter } from './getCounter'

describe('getCounter', () => {
  it('should return counter state', () => {
    const state: DeepPartial<RootState> = { counter: { value: 42 } }

    expect(getCounter(state as RootState)).toEqual({ value: 42 })
  })
})
