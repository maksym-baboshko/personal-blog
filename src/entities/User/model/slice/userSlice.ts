import { createSlice } from '@reduxjs/toolkit'

import { type UserSchema } from '../types'

const initialState: UserSchema = {
  authData: {
    accessToken: '',
    user: {
      email: '',
      id: 0
    }
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
