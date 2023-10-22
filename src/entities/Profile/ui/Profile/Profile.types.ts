import { type FC } from 'react'

import { type User } from '@shared/api/user'

interface ProfileProps {
  user: User | null
  readonly: boolean
  isLoading: boolean
  error: string | undefined
}

export type ProfileFC = FC<ProfileProps>
