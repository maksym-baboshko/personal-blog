import { configureStore } from '@reduxjs/toolkit'

import { $api } from '@shared/api/axios'
import { userReducer } from '@entities/User'
import { counterReducer } from '@entities/Counter'
import { apiMiddleware, apiPath, apiReducer } from '@shared/api/rtk'
import { type AppReducers, type AsyncReducers, type RootState } from '@shared/types'

import { authInterceptor } from './middleware'
import { type ThunkExtraArg } from './store.types'
import { createReducerManager } from './reducerManager'

export const createReduxStore = (initialState?: RootState, asyncReducers?: AsyncReducers) => {
  const reducerManager = createReducerManager<RootState>({
    ...(asyncReducers as AppReducers),
    user: userReducer,
    counter: counterReducer,
    [apiPath]: apiReducer
  })

  const extraArgument: ThunkExtraArg = { api: $api }

  const store = configureStore({
    devTools: __IS_DEV__,
    reducer: reducerManager.reducer,
    preloadedState: initialState,
    enhancers: [reducerManager.enhancer],
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({ thunk: { extraArgument } }).concat(
        authInterceptor,
        apiMiddleware
      )
    }
  })

  return store
}

export const store = createReduxStore()
