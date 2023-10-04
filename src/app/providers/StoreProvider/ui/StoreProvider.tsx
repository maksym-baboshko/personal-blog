import { Provider } from 'react-redux'

import { createReduxStore } from '@app/config/store'

import { type StoreProviderFC } from './StoreProvider.types'

export const StoreProvider: StoreProviderFC = ({ children, initialState }) => {
  const store = createReduxStore(initialState)

  return <Provider store={store}>{children}</Provider>
}
