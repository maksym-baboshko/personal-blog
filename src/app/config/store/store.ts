import { configureStore } from '@reduxjs/toolkit'

import { api } from '@shared/api/root'
import { userReducer } from '@entities/User'
import { type AppReducers, type AsyncReducers, type RootState } from '@shared/types/store'

import { createReducerManager } from './lib/reducerManager'

export const createReduxStore = (initialState?: RootState, asyncReducers?: AsyncReducers) => {
  const reducerManager = createReducerManager<RootState>({
    ...(asyncReducers as AppReducers),
    user: userReducer,
    [api.reducerPath]: api.reducer
  })

  const middlewares = [api.middleware]

  const store = configureStore({
    devTools: __IS_DEV__,
    reducer: reducerManager.reducer,
    preloadedState: initialState,
    enhancers: [reducerManager.enhancer],
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
  })

  return store
}

export const store = createReduxStore()
