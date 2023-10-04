import { type ReactNode, type FC } from 'react'

import { type StateSchema } from '@shared/types'

interface StoreProviderProps {
  children: ReactNode
  initialState?: StateSchema
}

export type StoreProviderFC = FC<StoreProviderProps>
