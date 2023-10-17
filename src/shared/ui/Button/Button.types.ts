import { type ButtonHTMLAttributes } from 'react'

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
