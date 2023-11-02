import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type tAuthResponse } from '@shared/api/auth'
import { LS_JWT_KEY } from '@shared/constants/localStorage'

import { type tUser, type iUserState } from '../../types'

const token = localStorage.getItem(LS_JWT_KEY)

const initialState: iUserState = {
  isAuthenticated: false,
  data: null,
  token
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authWithCredentials: (state, { payload }: PayloadAction<tAuthResponse>) => {
      state.data = payload.user
      state.isAuthenticated = true
      state.token = payload.accessToken
      localStorage.setItem(LS_JWT_KEY, payload.accessToken)
    },
    updateData: (state, { payload }: PayloadAction<tUser>) => {
      state.data = payload
      state.isAuthenticated = true
    },
    logOut() {
      localStorage.removeItem(LS_JWT_KEY)
      return { ...initialState, token: null }
    }
  }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
