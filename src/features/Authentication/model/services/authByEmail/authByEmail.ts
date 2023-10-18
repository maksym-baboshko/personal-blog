import { type AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { userActions } from '@entities/User'
import { type ThunkConfig } from '@shared/types/store'
import { LS_JWT_KEY } from '@shared/constants/localStorage'

import { type AuthResponse, type UserCredentials } from '../../types'

export const authByEmail = createAsyncThunk<AuthResponse, UserCredentials, ThunkConfig>(
  'auth/authByEmail',
  async (creds, { rejectWithValue, dispatch, extra }) => {
    const { api } = extra

    try {
      const { data } = await api.post<AuthResponse>('/signin', creds)

      if (!data) throw new Error('Something went wrong')

      dispatch(userActions.setUserCreds(data))
      localStorage.setItem(LS_JWT_KEY, data.accessToken)

      return data
    } catch (err) {
      const error = err as AxiosError<string>

      if (!error.response) throw err

      return rejectWithValue(error.response.data)
    }
  }
)
