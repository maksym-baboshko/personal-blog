import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type tRequestStatus } from '@shared/types/store'
import { LS_JWT_KEY } from '@shared/constants/localStorage'

import { initUserProfile } from '../services'
import { type UserSchema, type User, type UserAuthData } from '../types'

const token = localStorage.getItem(LS_JWT_KEY)
const initializationStatus: tRequestStatus = token ? 'loading' : 'idle'

const initialState: UserSchema = {
  profile: null,
  isAuthorized: false,
  initializationStatus,
  initializationError: null,
  token
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserCredentials(state, { payload }: PayloadAction<UserAuthData>) {
      state.token = payload.token
      state.profile = payload.profile
      state.isAuthorized = true
      state.initializationStatus = 'success'
      state.initializationError = null
    },
    logOut() {
      localStorage.removeItem(LS_JWT_KEY)
      return { ...initialState, token: null, initializationStatus: 'idle' }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(initUserProfile.pending, (state) => {
      state.initializationStatus = 'loading'
      state.initializationError = null
    })
    builder.addCase(initUserProfile.fulfilled, (state, { payload }: PayloadAction<User>) => {
      state.profile = payload
      state.isAuthorized = true
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
