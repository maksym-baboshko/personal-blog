import {
  type Reducer,
  type StoreEnhancer,
  type CombinedState,
  type ReducersMapObject
} from '@reduxjs/toolkit'

import { type UserReducer } from '@entities/User'
import { type CounterReducer } from '@entities/Counter'
import { type AuthReducer } from '@features/Authentication'
import { type RequestStatus } from '@shared/constants/store'
import { type UserProfileReducer } from '@entities/UserProfile'
import { type apiPath, type apiReducer } from '@shared/api/rtk'

import { type EnumAsUnion } from './enum-as-union'

export interface RootState {
  user: UserReducer
  counter: CounterReducer
  [apiPath]: ReturnType<typeof apiReducer>

  //* Async reducers
  auth?: AuthReducer
  userProfile?: UserProfileReducer
}

export type tSelector<T> = (state: RootState) => T
export type tRequestStatus = EnumAsUnion<typeof RequestStatus>

export type RootStateKey = keyof RootState
export type AppReducers = { [name in RootStateKey]?: Reducer<NonNullable<RootState[name]>> }

export type OnlyOptionalKeys<State> = keyof {
  [K in keyof State as [undefined] extends [State[K]] ? K : never]: true
}

export type AppAsyncReducers = Pick<AppReducers, OnlyOptionalKeys<RootState>>

export interface ReducerManager<State> {
  getReducerMap: () => ReducersMapObject<State>
  reducer: Reducer<CombinedState<State>>
  add: <K extends keyof State>(key: K, reducer: Reducer<Exclude<State[K], undefined>>) => void
  remove: (key: OnlyOptionalKeys<State>) => void
  enhancer: StoreEnhancer<{ reducerManager: ReducerManager<State> }>
}
