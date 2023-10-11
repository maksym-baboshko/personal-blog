import { type UserProfile } from '@entities/User'
import { type tRequestStatus } from '@shared/types'

import { type userProfileReducer } from '../slice'

export interface UserProfileSchema {
  profile: UserProfile | null
  status: tRequestStatus
  error: string | null
  readonly: boolean
}

export type UserProfileReducer = ReturnType<typeof userProfileReducer>
