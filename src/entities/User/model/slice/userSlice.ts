import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type tRequestStatus } from '@shared/types'
import { LS_JWT_KEY } from '@shared/constants/localStorage'

import { initUserProfile } from '../services'
import { type UserSchema, type UserProfile, type UserAuthData } from '../types'

const jwt = localStorage.getItem(LS_JWT_KEY)
const initializationStatus: tRequestStatus = jwt ? 'loading' : 'idle'

const initialState: UserSchema = {
  profile: null,
  isAuthorized: false,
  initializationStatus,
  initializationError: null,
  jwt
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserCredentials(state, { payload }: PayloadAction<UserAuthData>) {
      state.jwt = payload.jwt
      state.profile = payload.profile
      state.isAuthorized = true
      state.initializationStatus = 'success'
      state.initializationError = null
    },
    logOut() {
      localStorage.removeItem(LS_JWT_KEY)
      return { ...initialState, jwt: null, initializationStatus: 'idle' }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(initUserProfile.pending, (state) => {
      state.initializationStatus = 'loading'
      state.initializationError = null
    })
    builder.addCase(initUserProfile.fulfilled, (state, { payload }: PayloadAction<UserProfile>) => {
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
