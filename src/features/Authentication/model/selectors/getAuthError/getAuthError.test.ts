import { type DeepPartial } from '@reduxjs/toolkit'

import { type RootState } from '@shared/types/store'

import { getAuthError } from './getAuthError'

describe('getAuthError.test', () => {
  it('should return auth error', () => {
    const state: DeepPartial<RootState> = {
      auth: { status: 'error', error: 'Something went wrong' }
    }

    expect(getAuthError(state as RootState)).toEqual('Something went wrong')
  })

  it("should return null if there's no auth state", () => {
    const state: DeepPartial<RootState> = {}

    expect(getAuthError(state as RootState)).toBeNull()
  })
})
