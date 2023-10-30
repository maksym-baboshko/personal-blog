import { type User } from '@shared/types/user'

export interface UserStateSchema {
  token: string | null
  data: User | null
  isAuthenticated: boolean
}
