import { type FC } from 'react'

import { type tUser } from '@entities/User'

interface ProfileEditingFormProps extends Partial<tUser> {}

export type ProfileEditingFormFC = FC<ProfileEditingFormProps>
