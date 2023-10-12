import { type AxiosInstance } from 'axios'

import { type store } from './store'

export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']

export interface ThunkExtraArg {
  api: AxiosInstance
}
