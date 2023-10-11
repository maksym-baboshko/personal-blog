import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

import { type RootState } from '@shared/types'

const baseQuery = fetchBaseQuery({
  baseUrl: __API__,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.jwt

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  }
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 })

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['UserProfile'],
  endpoints: (builder) => ({})
})

export const { reducerPath: apiPath, reducer: apiReducer, middleware: apiMiddleware } = api
export type APIReducer = ReturnType<typeof apiReducer>
