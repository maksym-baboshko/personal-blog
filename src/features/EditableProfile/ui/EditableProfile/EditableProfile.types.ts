import { type FC } from 'react'

import { type User } from '@shared/api/user'

interface EditableProfileProps extends Partial<User> {
  readonly: boolean
}

export type EditableProfileFC = FC<EditableProfileProps>
