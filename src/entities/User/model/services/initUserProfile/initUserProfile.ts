import { type AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import decodeJWT, { type JwtPayload } from 'jwt-decode'

import { type ThunkConfig } from '@shared/types/store'

import { type UserInitialError, type User } from '../../types'

export const initUserProfile = createAsyncThunk<User, void, ThunkConfig<UserInitialError>>(
  'user/initUserProfile',
  async (_, { rejectWithValue, getState, extra }) => {
    const { api } = extra

    try {
      const token = getState().user.token

      if (!token) throw new Error("There's no JWT in the storage")

      const parsedJWT = decodeJWT<JwtPayload>(token)
      const userId = parsedJWT.sub ? Number(parsedJWT.sub) : null

      if (!userId) throw new Error("The JWT isn't valid")

      // TODO: Replace with RTK query
      //* const response = await dispatch(getUserProfileByIdQuery(userId)).unwrap()
      const { data } = await api.get(`/users/${userId}`)

      return data
    } catch (err) {
      const error = err as AxiosError

      if (!error.response) throw err

      return rejectWithValue({ status: error.response.status, message: error.response.data })
    }
  },
  {
    condition: (_, { getState }) => {
      const token = getState().user.token

      if (!token) return false
    }
  }
)
