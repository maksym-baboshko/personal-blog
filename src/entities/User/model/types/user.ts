export interface User {
  email: string
  id: number
}

interface AuthData {
  accessToken: string
  user: User
}

export interface UserSchema {
  authData?: AuthData
}
