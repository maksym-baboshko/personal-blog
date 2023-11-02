import { parse } from 'valibot'

import { type RootState } from '@shared/types/store'
import { type tRawUserData, UserSchema, type tUser, userActions } from '@entities/User'

import { api } from '../root'

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<tUser, number | string | undefined>({
      query: (userId) => `users/${userId}`,
      transformResponse: (response: tRawUserData) => parse(UserSchema, response),
      extraOptions: { maxRetries: 0 },
      providesTags: ['User']
    }),
    updateUser: build.mutation<tUser, Partial<tUser>>({
      query: (user) => ({
        url: `users/${user.id}`,
        method: 'PATCH',
        body: user
      }),
      transformResponse: (response: tRawUserData) => parse(UserSchema, response),
      extraOptions: { maxRetries: 0 },
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled }) {
        const userBeforeUpdate = (getState() as RootState).user.data
        dispatch(userActions.updateData(arg as tUser))

        try {
          await queryFulfilled
        } catch {
          dispatch(userActions.updateData(userBeforeUpdate as tUser))
        }
      }
    })
  })
})

export const {
  getUser: { useQueryState: useGetUserQueryState }
} = userApi.endpoints

export const { useGetUserQuery, useUpdateUserMutation } = userApi
