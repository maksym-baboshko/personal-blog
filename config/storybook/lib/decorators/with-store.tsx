import { type Decorator } from '@storybook/react'

import { StoreProvider } from '@app/providers/StoreProvider'

export const withStore: Decorator = (Story) => {
  const initialState = {
    counter: { value: 42 },
    user: { authData: { accessToken: '', user: { email: '', id: 0 } } }
  }

  return (
    <StoreProvider initialState={initialState}>
      <Story />
    </StoreProvider>
  )
}
