import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query'

import { type RootState } from '@shared/types/store'

export const baseQuery = retry(
  fetchBaseQuery({
    baseUrl: __API__,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    }
  }),
  { maxRetries: 2 }
)
