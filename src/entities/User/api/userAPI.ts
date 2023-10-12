import { api } from '@shared/api/rtk'

import { type IUserProfile } from '../model/types'

export const userAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getUserProfileById: build.query<IUserProfile, number>({
      query: (userId) => ({ url: `users/${userId}` }),
      providesTags: ['UserProfile']
    })
  })
})

export const {
  getUserProfileById: { initiate: getUserProfileByIdQuery }
} = userAPI.endpoints
