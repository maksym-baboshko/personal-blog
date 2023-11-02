import { type FC } from 'react'

import { type tUser } from '@entities/User'

interface ProfileProps {
  user: tUser | null
  readonly: boolean
  isLoading: boolean
  error?: string
}

export type ProfileFC = FC<ProfileProps>
