import { isRejectedWithValue, type Middleware } from '@reduxjs/toolkit'

import { userActions } from '@entities/User'

export const authInterceptor: Middleware = ({ dispatch }) => {
  return (next) => (action) => {
    if (isRejectedWithValue(action) && action.payload.status === 401) {
      dispatch(userActions.logOut())
    }

    return next(action)
  }
}
