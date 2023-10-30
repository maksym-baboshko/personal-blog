import { userActions } from '@entities/User'
import { type User } from '@shared/types/user'
import { type RootState } from '@shared/types/store'

import { api } from '../root'

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<User, number | string | undefined>({
      query: (userId) => `users/${userId}`,
      providesTags: ['User'],
      extraOptions: { maxRetries: 0 }
    }),
    updateUser: build.mutation<User, Partial<User>>({
      query: (user) => ({
        url: `users/${user.id}`,
        method: 'PATCH',
        body: user
      }),
      extraOptions: { maxRetries: 0 },
      async onQueryStarted(arg, { dispatch, getState, queryFulfilled }) {
        const userBeforeUpdate = (getState() as RootState).user.data
        dispatch(userActions.updateData(arg as User))

        try {
          await queryFulfilled
        } catch {
          dispatch(userActions.updateData(userBeforeUpdate as User))
        }
      }
    })
  })
})

export const {
  getUser: { useQueryState: useGetUserQueryState }
} = userApi.endpoints

export const { useGetUserQuery, useUpdateUserMutation } = userApi
