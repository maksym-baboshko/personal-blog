import { configureStore } from '@reduxjs/toolkit'

import { type AppAsyncReducers, type RootState } from '@shared/types'
import { userReducer } from '@entities/User'
import { counterReducer } from '@entities/Counter'
import { apiMiddleware, apiPath, apiReducer } from '@shared/api/rtk'

import { authInterceptor } from './middleware'
import { createReducerManager } from './reducerManager'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createReduxStore = (initialState?: RootState, asyncReducers?: AppAsyncReducers) => {
  const reducerManager = createReducerManager<RootState>({
    ...asyncReducers,
    user: userReducer,
    counter: counterReducer,
    [apiPath]: apiReducer
  })

  const store = configureStore({
    devTools: __IS_DEV__,
    reducer: reducerManager.reducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(authInterceptor, apiMiddleware)
    },
    enhancers: [reducerManager.enhancer]
  })

  return store
}

export const store = createReduxStore()
