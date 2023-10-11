import { useEffect } from 'react'

import {
  type RootState,
  type AppReducers,
  type RootStateKey,
  type OnlyOptionalKeys
} from '@shared/types'

import { useAppStore } from './useAppStore'
import { useAppDispatch } from './useAppDispatch'

export const useLazyReducers = (reducers: AppReducers, destroyAfterUnmount = true): void => {
  const dispatch = useAppDispatch()
  const store = useAppStore()

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap()

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mountedReducer = mountedReducers[name as RootStateKey]

      if (!mountedReducer) {
        store.reducerManager.add(name as RootStateKey, reducer)
        dispatch({ type: `${name}/lazyReducer/initialized` })
      }
    })

    return () => {
      if (destroyAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as OnlyOptionalKeys<RootState>)
          dispatch({ type: `${name}/lazyReducer/destroyed` })
        })
      }
    }
  }, [destroyAfterUnmount, dispatch, reducers, store.reducerManager])
}
