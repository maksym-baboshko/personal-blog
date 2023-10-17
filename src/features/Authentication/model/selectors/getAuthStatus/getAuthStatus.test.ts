import { type DeepPartial } from '@reduxjs/toolkit'

import { type RootState } from '@shared/types/store'

import { getAuthStatus } from './getAuthStatus'

describe('getAuthStatus.test', () => {
  it('should return correct auth status', () => {
    const state: DeepPartial<RootState> = {
      auth: { status: 'loading', error: null }
    }

    expect(getAuthStatus(state as RootState)).toEqual('loading')
  })
})
