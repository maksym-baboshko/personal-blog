import { api } from '../root'

import { type User } from './types'

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<User, number | undefined>({
      query: (userId) => ({ url: `users/${userId}` }),
      extraOptions: { maxRetries: 0 }
    })
  })
})

export const { useGetUserQuery } = userApi
export const { getUser } = userApi.endpoints
export const { useQueryState: useGetUserQueryState } = getUser
