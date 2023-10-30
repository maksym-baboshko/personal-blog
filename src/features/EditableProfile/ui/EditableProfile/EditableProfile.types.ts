import { type FC } from 'react'

import { type User } from '@shared/types/user'

interface EditableProfileProps extends Partial<User> {
  readonly: boolean
}

export type EditableProfileFC = FC<EditableProfileProps>
