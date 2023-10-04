import { type StateSchema } from '@shared/types'

import { type CounterSchema } from '../../types'

export const getCounter = (state: StateSchema): CounterSchema => state.counter
