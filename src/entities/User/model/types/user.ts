import { type tRequestStatus } from '@shared/types'

import { type userReducer } from '../slice'

export interface UserProfile {
  id: number
  email: string
  fname: string
  lname: string
  age?: number
  gender?: string
  avatar?: string
  originCity?: string
  currentCity?: string
  originCountry?: string
  currentCountry?: string
  roles?: string[]
  config?: Record<string, any>
  permissions?: Record<string, boolean>
}

export interface UserAuthData {
  jwt: string | null
  profile: UserProfile | null
}

export interface UserInitialError {
  status: number
  message: string | unknown
}

export interface UserSchema extends UserAuthData {
  isAuthorized: boolean
  initializationStatus: tRequestStatus
  initializationError: string | UserInitialError | null
}

export type UserReducer = ReturnType<typeof userReducer>
