import { Provider } from 'react-redux'

import { type RootState } from '@shared/types/store'

import { createReduxStore, store } from '../../../config/store'

import { type StoreProviderFC } from './StoreProvider.types'

export const StoreProvider: StoreProviderFC = ({ children, initialState, asyncReducers }) => {
  const mockStore = createReduxStore(initialState as RootState, asyncReducers)

  return <Provider store={initialState ? mockStore : store}>{children}</Provider>
}
