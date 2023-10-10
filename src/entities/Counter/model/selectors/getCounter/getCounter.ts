import { type tSelector } from '@shared/types'

import { type CounterSchema } from '../../types'

export const getCounter: tSelector<CounterSchema> = (state) => state.counter
