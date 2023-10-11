import { type DeepPartial } from '@reduxjs/toolkit'

import { type AuthSchema } from '../types'

import { authActions, authReducer } from './authSlice'

describe('authSlice.test', () => {
  it('should reset auth state correctly', () => {
    const state: DeepPartial<AuthSchema> = { status: 'error', error: 'Something went wrong' }
    const result = authReducer(state as AuthSchema, authActions.reset())

    expect(result).toEqual({ status: 'idle', error: null })
  })
})
