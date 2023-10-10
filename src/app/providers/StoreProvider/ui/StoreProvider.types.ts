import { type ReactNode, type FC } from 'react'

import { type DeepPartial } from '@reduxjs/toolkit'

import { type StateSchema } from '@shared/types'

interface StoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export type StoreProviderFC = FC<StoreProviderProps>
