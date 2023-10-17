import { type ReducersMapObject, combineReducers } from '@reduxjs/toolkit'

import { type ReducerManager } from '@shared/types/store'

/* eslint-disable */
export const createReducerManager = <State>(initialReducers: ReducersMapObject<State>) => {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)

  let keysToRemove: Array<keyof State> = []

  const reducerManager: ReducerManager<State> = {
    getReducerMap: () => reducers,

    reducer: (state, action) => {
      if (keysToRemove.length > 0) {
        state = { ...state } as any

        for (const key of keysToRemove) {
          delete state![key]
        }

        keysToRemove = []
      }

      return combinedReducer(state, action)
    },

    add: (key, reducer) => {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer as any

      combinedReducer = combineReducers(reducers)
    },

    remove: (k) => {
      const key = k as keyof State

      if (!key || !reducers[key]) {
        return
      }

      delete reducers[key]
      keysToRemove.push(key)

      combinedReducer = combineReducers(reducers)
    },

    enhancer:
      (next) =>
      (...args) => {
        const store = next(...args)
        return {
          ...store,
          reducerManager
        }
      }
  }

  return reducerManager
}
