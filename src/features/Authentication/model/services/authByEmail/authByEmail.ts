import { type AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { $api } from '@shared/api/axios'
import { userActions } from '@entities/User'
import { LS_JWT_KEY } from '@shared/constants/localStorage'

import { type AuthResponse, type UserCredentials } from '../../types'

export const authByEmail = createAsyncThunk<AuthResponse, UserCredentials, { rejectValue: string }>(
  'auth/authByEmail',
  async (creds, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await $api.post<AuthResponse>('/signin', creds)

      if (!data) throw new Error('Something went wrong')

      dispatch(userActions.setUserCredentials({ profile: data.user, jwt: data.accessToken }))
      localStorage.setItem(LS_JWT_KEY, data.accessToken)

      return data
    } catch (err) {
      const error: AxiosError<string> = err

      if (!error.response) throw err

      return rejectWithValue(error.response.data)
    }
  }
)
