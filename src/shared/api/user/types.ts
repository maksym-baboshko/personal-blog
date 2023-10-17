export interface User {
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
