import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'

import { userReducer } from '@entities/User'
import { counterReducer } from '@entities/Counter'
import { type StateSchema } from '@shared/types'

export const createReduxStore = (initialState?: StateSchema): ReturnType<typeof configureStore> => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: userReducer,
    counter: counterReducer
  }

  return configureStore<StateSchema>({
    devTools: __IS_DEV__,
    preloadedState: initialState,
    reducer: rootReducer
  })
}

export const store = createReduxStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
