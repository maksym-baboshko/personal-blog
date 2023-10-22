import { type FC } from 'react'

import { type User } from '@shared/api/user'

interface ProfileViewCardProps extends Partial<User> {}

export type ProfileViewCardFC = FC<ProfileViewCardProps>
