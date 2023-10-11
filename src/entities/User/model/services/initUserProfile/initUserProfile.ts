import { type AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import decodeJWT, { type JwtPayload } from 'jwt-decode'

import { $api } from '@shared/api/axios'
import { type RootState } from '@shared/types'

import { type UserInitializationError, type UserProfile } from '../../types'

export const initUserProfile = createAsyncThunk<
  UserProfile,
  void,
  { rejectValue: UserInitializationError; state: RootState }
>(
  'user/initUserProfile',
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const jwt = getState().user.jwt

      if (!jwt) throw new Error("There's no JWT in the storage")

      const parsedJWT = decodeJWT<JwtPayload>(jwt)
      const userId = parsedJWT.sub ? Number(parsedJWT.sub) : null

      if (!userId) throw new Error("The JWT isn't valid")

      // TODO: Replace with RTK query
      //* const response = await dispatch(getUserProfileByIdQuery(userId)).unwrap()
      const { data } = await $api.get(`/users/${userId}`)

      return data
    } catch (err) {
      const error: AxiosError = err
      if (!error.response) throw err
      return rejectWithValue({ status: error.response.status, message: error.response.data })
    }
  },
  {
    condition: (_, { getState }) => {
      const jwt = getState().user.jwt

      if (!jwt) return false
    }
  }
)
