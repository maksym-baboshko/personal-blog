import { type ReactNode, type FC } from 'react'

import { type DeepPartial } from '@reduxjs/toolkit'

import { type AppAsyncReducers, type RootState } from '@shared/types'

interface StoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<RootState>
  asyncReducers?: AppAsyncReducers
}

export type StoreProviderFC = FC<StoreProviderProps>
