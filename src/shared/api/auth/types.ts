import { type User } from '@shared/types/user'

export interface UserCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  accessToken: string
  user: User
}
