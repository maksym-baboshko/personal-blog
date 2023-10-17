import { api } from '../root'

import { type AuthResponse, type UserCredentials } from './types'

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthResponse, UserCredentials>({
      query: (credentials) => ({
        url: '/signin',
        method: 'POST',
        body: credentials
      })
    })
  })
})

export const { login } = authApi.endpoints
export const { useLoginMutation } = authApi
