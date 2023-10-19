import { type User } from '@shared/api/user'

export interface UserStateSchema {
  token: string | null
  data: User | null
  isAuthenticated: boolean
}
