import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type User } from '@shared/api/user'
import { type AuthResponse } from '@shared/api/auth/types'
import { LS_JWT_KEY } from '@shared/constants/localStorage'

import { type UserStateSchema } from '../../types'

const token = localStorage.getItem(LS_JWT_KEY)

const initialState: UserStateSchema = {
  isAuthenticated: false,
  data: null,
  token
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserCredentials: (state, { payload }: PayloadAction<AuthResponse>) => {
      state.data = payload.user
      state.isAuthenticated = true
      state.token = payload.accessToken
      localStorage.setItem(LS_JWT_KEY, payload.accessToken)
    },
    setUser: (state, { payload }: PayloadAction<User>) => {
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
