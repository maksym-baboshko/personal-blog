import { type ButtonHTMLAttributes, type FC } from 'react'

import { type EnumAsUnion } from '@shared/types'

enum ButtonVariant {
  SOLID = 'solid',
  OUTLINED = 'outlined',
  LIGHT = 'light'
}

enum ButtonSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: EnumAsUnion<typeof ButtonVariant>
  size?: EnumAsUnion<typeof ButtonSize>
  isIcon?: boolean
}

export type ButtonFC = FC<ButtonProps>
