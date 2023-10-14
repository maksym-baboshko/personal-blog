import { type tSelector } from '@shared/types'

import { type IUserProfile } from '../../types'

export const getUserProfile: tSelector<IUserProfile | null> = (state) => state.user.profile
