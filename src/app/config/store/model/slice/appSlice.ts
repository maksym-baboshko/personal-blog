import { createSlice } from '@reduxjs/toolkit'

import { LS_JWT_KEY } from '@shared/constants/localStorage'

import { type AppSchema, type tInitializationStatus } from '../types'

const status: tInitializationStatus = localStorage.getItem(LS_JWT_KEY) ? 'initializing' : 'idle'

const initialState: AppSchema = {
  isInitialized: false,
  status
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    appInitialized(state) {
      state.isInitialized = true
      state.status = 'initialized'
    }
  }
})

export const { actions: appActions } = appSlice
export const { reducer: appReducer } = appSlice
