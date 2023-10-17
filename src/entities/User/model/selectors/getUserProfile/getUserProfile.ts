import { type tSelector } from '@shared/types/store'

import { type User } from '../../types'

export const getUserProfile: tSelector<User | null> = (state) => state.user.profile
