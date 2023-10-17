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
