import { type ButtonHTMLAttributes, type FC } from 'react'

import { type EnumAsUnion } from '@shared/types'

export enum ButtonVariant {
  PRIMARY = 'primary',
  OUTLINED = 'outlined'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: EnumAsUnion<typeof ButtonVariant>
}

export type ButtonFC = FC<ButtonProps>
