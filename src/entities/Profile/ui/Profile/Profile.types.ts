import { type FC } from 'react'

import { type User } from '@shared/api/user'

interface ProfileProps {
  className?: string
  user: User | null
  readonly?: boolean
}

export type ProfileFC = FC<ProfileProps>
