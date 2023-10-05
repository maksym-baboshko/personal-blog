import { type Decorator } from '@storybook/react'

import { StoreProvider } from '@app/providers/StoreProvider'

export const withStore: Decorator = (Story) => {
  const initialState = { counter: { value: 0 } }

  return (
    <StoreProvider initialState={initialState}>
      <Story />
    </StoreProvider>
  )
}
