import { parse } from 'valibot'

import { type tUserCredentials } from '@entities/User'

import { api } from '../root'

import { AuthResponseSchema } from './model/schemas'
import { type tAuthResponse, type tRawAuthResponse } from './model/types'

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<tAuthResponse, tUserCredentials>({
      query: (credentials) => ({ url: '/signin', method: 'POST', body: credentials }),
      transformResponse: (response: tRawAuthResponse) => parse(AuthResponseSchema, response),
      extraOptions: { maxRetries: 0 }
    })
  })
})

export const { useLoginMutation } = authApi
