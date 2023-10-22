import { type BaseQueryFn, fetchBaseQuery, retry } from '@reduxjs/toolkit/query'

import { userActions } from '@entities/User'
import { type RootState } from '@shared/types/store'

const baseQuery = fetchBaseQuery({
  baseUrl: __API__,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.token

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  }
})

const baseQueryWithAuthCheck: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions)
  const token = (api.getState() as RootState).user.token

  if (token && result.error && result.error.status === 401) {
    api.dispatch(userActions.logOut())
  }

  return result
}

export const baseQueryWithRetry = retry(baseQueryWithAuthCheck, { maxRetries: 2 })
