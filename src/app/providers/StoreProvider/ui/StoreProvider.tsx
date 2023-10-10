import { Provider } from 'react-redux'

import { type StateSchema } from '@shared/types'
import { createReduxStore } from '@app/config/store'

import { type StoreProviderFC } from './StoreProvider.types'

export const StoreProvider: StoreProviderFC = ({ children, initialState }) => {
  const store = createReduxStore(initialState as StateSchema | undefined)

  return <Provider store={store}>{children}</Provider>
}
