import { type FC } from 'react'

enum TextColor {
  DEFAULT = 'default',
  DANGER = 'danger'
}

enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center'
}

interface TextProps {
  heading?: string
  text?: string
  className?: string
  color?: EnumAsUnion<typeof TextColor>
  textAlign?: EnumAsUnion<typeof TextAlign>
  fullPage?: boolean
}

export type TextFC = FC<TextProps>
