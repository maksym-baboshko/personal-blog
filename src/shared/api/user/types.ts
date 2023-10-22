export interface User {
  id: number
  email: string
  username: string
  fname: string
  lname: string
  isPrivate: boolean
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
