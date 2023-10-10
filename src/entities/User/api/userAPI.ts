import { api } from '@shared/api/rtk'

import { type UserProfile } from '../model/types'

export const userAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getUserProfileById: build.query<UserProfile, number>({
      query: (userId) => ({ url: `users/${userId}` }),
      providesTags: ['UserProfile']
    })
  })
})

export const {
  getUserProfileById: { initiate: getUserProfileByIdQuery }
} = userAPI.endpoints
