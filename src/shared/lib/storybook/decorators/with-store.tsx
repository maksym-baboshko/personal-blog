import { type Decorator } from '@storybook/react'
import { type DeepPartial } from '@reduxjs/toolkit'

import { mockAuthReducer } from '@features/Authentication'
import { StoreProvider } from '@app/providers/StoreProvider'
import { mockUserProfileReducer } from '@entities/UserProfile'
import { type AppAsyncReducers, type RootState } from '@shared/types'

const defaultAsyncReducers: AppAsyncReducers = {
  auth: mockAuthReducer,
  userProfile: mockUserProfileReducer
}

type WithStoreFunc = (state: DeepPartial<RootState>, asyncReducers?: AppAsyncReducers) => Decorator

export const withStore: WithStoreFunc = (state, asyncReducers) => {
  const combinedAsyncReducers = { ...defaultAsyncReducers, ...asyncReducers }

  return function withStore(Story) {
    return (
      <StoreProvider initialState={state} asyncReducers={combinedAsyncReducers}>
        <Story />
      </StoreProvider>
    )
  }
}
