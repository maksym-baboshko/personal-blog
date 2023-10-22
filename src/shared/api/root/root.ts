import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithRetry } from './baseQuery'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['AuthenticatedUser', 'User'],
  endpoints: (builder) => ({})
})
