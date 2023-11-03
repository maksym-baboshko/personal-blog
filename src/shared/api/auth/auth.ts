import { safeParse } from 'valibot'

import { type tAuthCredentials } from '@features/Authentication'

import { api } from '../root'

import { AuthResponseSchema } from './model/schemas'
import { type tAuthResponse, type tRawAuthResponse } from './model/types'

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<tAuthResponse, tAuthCredentials>({
      query: (credentials) => ({ url: '/signin', method: 'POST', body: credentials }),
      transformResponse: (response: tRawAuthResponse) => {
        const result = safeParse(AuthResponseSchema, response)

        if (!result.success) {
          const invalidKeys = result.issues.map((i) => i.path?.at(0)?.key).join(', ')
          const err = new Error(`Authentication data is invalid. Invalid keys: ${invalidKeys}`)

          err.name = 'Validation error'

          throw err
        }

        return result.output
      },
      extraOptions: { maxRetries: 0 }
    })
  })
})

export const { useLoginMutation } = authApi
