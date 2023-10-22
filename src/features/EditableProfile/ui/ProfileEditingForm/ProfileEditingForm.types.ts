import { type FC } from 'react'

import { type User } from '@shared/api/user'

interface ProfileEditingFormProps extends Partial<User> {}

export type ProfileEditingFormFC = FC<ProfileEditingFormProps>
