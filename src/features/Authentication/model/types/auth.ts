import { type tRequestStatus } from '@shared/types/store'

import { type authReducer } from '../slice'

export interface UserCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  accessToken: string
  user: {
    id: number
    email: string
    fname: string
    lname: string
  }
}

export interface AuthSchema {
  status: tRequestStatus
  error: string | null
}

export type AuthReducer = ReturnType<typeof authReducer>
