import { type tSelector } from '@shared/types/store'

import { type tInitializationStatus } from '../../types'

export const selectAppInitialStatus: tSelector<tInitializationStatus> = (state) => state.app.status
