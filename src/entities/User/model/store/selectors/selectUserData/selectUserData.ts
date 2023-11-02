import { type tSelector } from '@shared/types/store'

import { type tUser } from '../../../types'

export const selectUserData: tSelector<tUser | null> = (state) => state.user.data
