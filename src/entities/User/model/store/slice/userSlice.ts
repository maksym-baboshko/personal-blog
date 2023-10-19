import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { getUser } from '@shared/api/user'
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
    logOut() {
      localStorage.removeItem(LS_JWT_KEY)
      return { ...initialState, token: null }
    }
  },
  extraReducers: ({ addMatcher }) => {
    addMatcher(getUser.matchFulfilled, (state, action) => {
      state.data = action.payload
      state.isAuthenticated = true
    })
  }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
