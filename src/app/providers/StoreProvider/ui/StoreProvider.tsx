import { Provider } from 'react-redux'

import { type RootState } from '@shared/types'
import { createReduxStore, store } from '@app/config/store'

import { type StoreProviderFC } from './StoreProvider.types'

export const StoreProvider: StoreProviderFC = ({ children, initialState, asyncReducers }) => {
  const mockStore = createReduxStore(initialState as RootState, asyncReducers)

  return <Provider store={initialState ? mockStore : store}>{children}</Provider>
}
