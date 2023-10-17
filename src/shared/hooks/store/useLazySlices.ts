import { useEffect } from 'react'

import { type Reducer } from '@reduxjs/toolkit'

import {
  type RootState,
  type RootStateKey,
  type AsyncReducers,
  type OnlyOptionalKeys
} from '@shared/types/store'

import { useAppStore } from './useAppStore'
import { useAppDispatch } from './useAppDispatch'

export const useLazyReducers = (reducers: AsyncReducers, destroyAfterUnmount = true): void => {
  const dispatch = useAppDispatch()
  const store = useAppStore()

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap()

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mountedReducer = mountedReducers[name as RootStateKey]

      if (!mountedReducer) {
        store.reducerManager.add(
          name as RootStateKey,
          reducer as Reducer<Exclude<RootState[RootStateKey], undefined>>
        )
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
