import { api } from '../root'

import { type User } from './types'

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<User, number>({
      query: (userId) => ({ url: `users/${userId}` }),
      providesTags: ['User']
    })
  })
})

export const { getUser } = userApi.endpoints
export const { useGetUserQuery } = userApi
