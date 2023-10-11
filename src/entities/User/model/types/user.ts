import { type tRequestStatus } from '@shared/types'

import { type userReducer } from '../slice'

export interface UserProfile {
  id: number
  email: string
  fname: string
  lname: string
  avatar?: string
  roles?: string[]
  config?: Record<string, any>
  permissions?: Record<string, boolean>
}

export interface UserAuthData {
  jwt: string | null
  profile: UserProfile | null
}

export interface UserInitializationError {
  status: number
  message: string | unknown
}

export interface UserSchema extends UserAuthData {
  isAuthorized: boolean
  initializationStatus: tRequestStatus
  initializationError: string | UserInitializationError | null
}

export type UserReducer = ReturnType<typeof userReducer>
