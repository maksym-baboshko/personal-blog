import {
  type Reducer,
  type StoreEnhancer,
  type CombinedState,
  type ReducersMapObject
} from '@reduxjs/toolkit'

import { type UserReducer } from '@entities/User'
import { type ThunkExtraArg } from '@app/config/store'
import { type CounterReducer } from '@entities/Counter'
import { type AuthReducer } from '@features/Authentication'
import { type RequestStatus } from '@shared/constants/store'
import { type apiPath, type apiReducer } from '@shared/api/rtk'

import { type EnumAsUnion } from './enum-as-union'

export interface RootState {
  user: UserReducer
  counter: CounterReducer
  [apiPath]: ReturnType<typeof apiReducer>

  //* Async reducers
  auth?: AuthReducer
}

export type tSelector<T> = (state: RootState) => T
export type tRequestStatus = EnumAsUnion<typeof RequestStatus>

export interface ThunkConfig<E = string> {
  rejectValue: E
  extra: ThunkExtraArg
  state: RootState
}

// AppReducers
export type RootStateKey = keyof RootState
export type AppReducers = ReducersMapObject<RootState>
export type OptionalReducers = { [name in RootStateKey]?: Reducer<NonNullable<RootState[name]>> }
export type AsyncReducers = Pick<OptionalReducers, OnlyOptionalKeys<RootState>>

export type OnlyOptionalKeys<State> = keyof {
  [K in keyof State as [undefined] extends [State[K]] ? K : never]: true
}

export interface ReducerManager<State> {
  getReducerMap: () => ReducersMapObject<State>
  reducer: Reducer<CombinedState<State>>
  add: <K extends keyof State>(key: K, reducer: Reducer<Exclude<State[K], undefined>>) => void
  remove: (key: OnlyOptionalKeys<State>) => void
  enhancer: StoreEnhancer<{ reducerManager: ReducerManager<State> }>
}
