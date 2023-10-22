import { userActions } from '@entities/User'
import { type RootState } from '@shared/types/store'

import { api } from '../root'

import { type User } from './types'

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAuthenticatedUser: build.query<User, number | string | undefined>({
      query: (userId) => ({ url: `users/${userId}` }),
      providesTags: ['AuthenticatedUser'],
      extraOptions: { maxRetries: 0 }
    }),
    getUser: build.query<User, number | string | undefined>({
      query: (userId) => ({ url: `users/${userId}` }),
      providesTags: ['User']
    }),
    updateUser: build.mutation<User, Partial<User>>({
      query: (user) => ({
        url: `users/${user.id}`,
        method: 'PATCH',
        body: user
      }),
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled }) {
        const userBeforeUpdate = (getState() as RootState).user.data

        dispatch(userActions.setUser(arg as User))

        try {
          await queryFulfilled
        } catch {
          dispatch(userActions.setUser(userBeforeUpdate as User))
        }
      },
      extraOptions: { maxRetries: 0 }
    })
  })
})

export const {
  getAuthenticatedUser: { useQueryState: useGetAuthenticatedUserQueryState }
} = userApi.endpoints

export const { useGetAuthenticatedUserQuery, useUpdateUserMutation, useGetUserQuery } = userApi
