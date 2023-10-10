import { type FC } from 'react'

import { type EnumAsUnion } from '@shared/types'

enum TextColor {
  DEFAULT = 'default',
  DANGER = 'danger'
}

interface TextProps {
  heading?: string
  text?: string
  className?: string
  color?: EnumAsUnion<typeof TextColor>
}

export type TextFC = FC<TextProps>
