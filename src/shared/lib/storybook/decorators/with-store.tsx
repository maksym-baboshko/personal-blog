import { type Decorator } from '@storybook/react'
import { type DeepPartial } from '@reduxjs/toolkit'

import { type StateSchema } from '@shared/types'
import { StoreProvider } from '@app/providers/StoreProvider'

export const withStore = (state: DeepPartial<StateSchema>): Decorator => {
  return function withStore(Story) {
    return (
      <StoreProvider initialState={state}>
        <Story />
      </StoreProvider>
    )
  }
}
