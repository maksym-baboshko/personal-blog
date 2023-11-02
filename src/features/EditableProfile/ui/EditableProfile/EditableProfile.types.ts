import { type FC } from 'react'

import { type tUser } from '@entities/User'

interface EditableProfileProps extends Partial<tUser> {
  readonly: boolean
}

export type EditableProfileFC = FC<EditableProfileProps>
