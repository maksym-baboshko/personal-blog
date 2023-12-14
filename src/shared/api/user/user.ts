import { safeParse } from 'valibot'

import { type RootState } from '@shared/types/store'
import { type tRawUserData, UserSchema, type tUser, userActions } from '@entities/User'

import { api } from '../root'

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<tUser, number | string | undefined>({
      query: (userId) => `users/${userId}`,
      transformResponse: (response: tRawUserData) => {
        const result = safeParse(UserSchema, response)

        if (!result.success) {
          const invalidKeys = result.issues.map((i) => i.path?.at(0)?.key).join(', ')
          const err = new Error(`User data is invalid. Invalid keys: ${invalidKeys}`)

          err.name = 'Validation error'

          throw err
        }

        return result.output
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
        } catch (e) {
          if (typeof e === 'object' && e !== null && 'isUnhandledError' in e) {
            if (!e.isUnhandledError) return

            dispatch(userActions.logOut())
            dispatch(api.util.resetApiState())
          }
        }
      },
      extraOptions: { maxRetries: 0 }
    }),
    updateUser: build.mutation<tUser, Partial<tUser>>({
      query: (user) => ({
        url: `users/${user.id}`,
        method: 'PATCH',
        body: user
      }),
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
    }),
    uploadAvatar: build.mutation<{ avatarUrl: string }, FormData>({
      query: (avatar) => ({
        url: 'users/avatar',
        method: 'POST',
        body: avatar
      }),
      extraOptions: { maxRetries: 0 }
    })
  })
})

export const {
  getUser: { useQueryState: useGetUserQueryState }
} = userApi.endpoints

export const { useGetUserQuery, useUpdateUserMutation, useUploadAvatarMutation } = userApi
