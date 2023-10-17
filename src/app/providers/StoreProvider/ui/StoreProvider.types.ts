import { type ReactNode, type FC } from 'react'

import { type DeepPartial } from '@reduxjs/toolkit'

import { type AsyncReducers, type RootState } from '@shared/types/store'

interface StoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<RootState>
  asyncReducers?: AsyncReducers
}

export type StoreProviderFC = FC<StoreProviderProps>
