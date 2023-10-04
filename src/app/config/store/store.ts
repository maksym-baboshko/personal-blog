import { configureStore } from '@reduxjs/toolkit'

import { type StateSchema } from '@shared/types'
import { counterReducer } from '@entities/Counter'

export const createReduxStore = (initialState?: StateSchema): ReturnType<typeof configureStore> => {
  return configureStore<StateSchema>({
    devTools: __IS_DEV__,
    preloadedState: initialState,
    reducer: {
      counter: counterReducer
    }
  })
}

export const store = createReduxStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
