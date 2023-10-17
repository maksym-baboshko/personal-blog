import { type FC } from 'react'

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
