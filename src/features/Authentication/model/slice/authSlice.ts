import { createSlice } from '@reduxjs/toolkit'

import { authByEmail } from '../services'
import { type AuthSchema } from '../types'

const initialState: AuthSchema = {
  status: 'idle',
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.status = 'idle'
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authByEmail.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })

    builder.addCase(authByEmail.fulfilled, (state) => {
      state.status = 'success'
    })

    builder.addCase(authByEmail.rejected, (state, { payload, error }) => {
      state.status = 'error'

      if (payload) {
        state.error = payload
      } else {
        state.error = error.message ?? null
      }
    })
  }
})

export const { actions: authActions } = authSlice
export const { reducer: authReducer } = authSlice
