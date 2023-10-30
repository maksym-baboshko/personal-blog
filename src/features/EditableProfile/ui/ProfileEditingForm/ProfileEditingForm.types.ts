import { type FC } from 'react'

import { type User } from '@shared/types/user'

interface ProfileEditingFormProps extends Partial<User> {}

export type ProfileEditingFormFC = FC<ProfileEditingFormProps>
