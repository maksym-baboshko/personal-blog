import { createSlice } from '@reduxjs/toolkit'

import { type UserProfileSchema } from '../types'

const initialState: UserProfileSchema = {
  profile: null,
  status: 'idle',
  error: null,
  readonly: true
}

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {}
})

export const { actions: userProfileActions } = userProfileSlice
export const { reducer: userProfileReducer } = userProfileSlice
