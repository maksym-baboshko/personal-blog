import { type FC } from 'react'

import { type tUser } from '@entities/User'

interface ProfileProps {
  user: tUser | null
  readonly: boolean
  isLoading: boolean
  error: string | undefined
}

export type ProfileFC = FC<ProfileProps>
