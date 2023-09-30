import { type ButtonHTMLAttributes, type FC } from 'react'

import { type EnumAsUnion } from '@shared/types'

export enum ButtonVariant {
  SOLID = 'solid',
  OUTLINED = 'outlined'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: EnumAsUnion<typeof ButtonVariant>
}

export type ButtonFC = FC<ButtonProps>
