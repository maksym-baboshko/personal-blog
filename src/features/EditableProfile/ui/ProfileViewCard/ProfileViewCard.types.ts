import { type FC } from 'react'

import { type tUser } from '@entities/User'

interface ProfileViewCardProps extends Partial<tUser> {
  isAvatarUpdating: boolean
}

export type ProfileViewCardFC = FC<ProfileViewCardProps>
