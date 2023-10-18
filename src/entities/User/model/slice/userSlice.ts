import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type tRequestStatus } from '@shared/types/store'
import { type AuthResponse } from '@shared/api/auth/types'
import { LS_JWT_KEY } from '@shared/constants/localStorage'

import { initUserProfile } from '../services'
import { type UserSchema, type User } from '../types'

const token = localStorage.getItem(LS_JWT_KEY)
const initializationStatus: tRequestStatus = token ? 'loading' : 'idle'

const initialState: UserSchema = {
  isAuthenticated: false,
  data: null,
  initializationStatus,
  initializationError: null,
  token
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserCredentials: (state, { payload }: PayloadAction<AuthResponse>) => {
      state.isAuthenticated = true
      state.data = payload.user
      state.token = payload.accessToken

      localStorage.setItem(LS_JWT_KEY, payload.accessToken)
    },
    setUserCreds(state, { payload }: PayloadAction<AuthResponse>) {
      state.token = payload.accessToken
      state.data = payload.user
      state.isAuthenticated = true
      state.initializationStatus = 'success'
      state.initializationError = null
    },
    logOut() {
      localStorage.removeItem(LS_JWT_KEY)

      return { ...initialState, token: null }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(initUserProfile.pending, (state) => {
      state.initializationStatus = 'loading'
      state.initializationError = null
    })
    builder.addCase(initUserProfile.fulfilled, (state, { payload }: PayloadAction<User>) => {
      state.data = payload
      state.isAuthenticated = true
      state.initializationStatus = 'success'
      state.initializationError = null
    })
    builder.addCase(initUserProfile.rejected, (state, { error, payload }) => {
      state.initializationStatus = 'error'

      if (payload) {
        state.initializationError = payload
      } else {
        state.initializationError = error.message ?? null
      }
    })
  }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
