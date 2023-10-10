import { configureStore } from '@reduxjs/toolkit'

import { api } from '@shared/api/rtk'
import { userReducer } from '@entities/User'
import { counterReducer } from '@entities/Counter'
import { authReducer } from '@features/Authentication'
import { type StateSchema } from '@shared/types'

import { authInterceptor } from './middleware'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer = {
    auth: authReducer,
    user: userReducer,
    counter: counterReducer,
    [api.reducerPath]: api.reducer
  }

  return configureStore({
    devTools: __IS_DEV__,
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(authInterceptor, api.middleware)
    }
  })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
