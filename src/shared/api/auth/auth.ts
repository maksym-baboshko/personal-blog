import { api } from '../root'

import { type AuthResponse, type UserCredentials } from './types'

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthResponse, UserCredentials>({
      query: (credentials) => ({ url: '/signin', method: 'POST', body: credentials }),
      extraOptions: { maxRetries: 0 }
    })
  })
})

export const { useLoginMutation } = authApi
