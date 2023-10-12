import { configureStore } from '@reduxjs/toolkit'

import { $api } from '@shared/api/axios'
import { userReducer } from '@entities/User'
import { counterReducer } from '@entities/Counter'
import { apiMiddleware, apiPath, apiReducer } from '@shared/api/rtk'
import { type AppAsyncReducers, type RootState } from '@shared/types'

import { authInterceptor } from './middleware'
import { createReducerManager } from './reducerManager'
import { type ThunkExtraArg } from './store.types'

export const createReduxStore = (initialState?: RootState, asyncReducers?: AppAsyncReducers) => {
  const reducerManager = createReducerManager<RootState>({
    ...asyncReducers,
    user: userReducer,
    counter: counterReducer,
    [apiPath]: apiReducer
  })

  const extraArgument: ThunkExtraArg = { api: $api }

  const store = configureStore({
    devTools: __IS_DEV__,
    reducer: reducerManager.reducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({ thunk: { extraArgument } }).concat(
        authInterceptor,
        apiMiddleware
      )
    },
    enhancers: [reducerManager.enhancer]
  })

  return store
}

export const store = createReduxStore()
