import { type User } from '../user'

export interface UserCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  accessToken: string
  user: User
}
