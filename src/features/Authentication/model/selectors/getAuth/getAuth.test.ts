import { type DeepPartial } from '@reduxjs/toolkit'

import { type RootState } from '@shared/types'

import { getAuth } from './getAuth'

describe('getAuth', () => {
  it('should return auth state', () => {
    const state: DeepPartial<RootState> = { auth: { status: 'idle', error: null } }

    expect(getAuth(state as RootState)).toEqual({ status: 'idle', error: null })
  })
})
