import { type ButtonHTMLAttributes } from 'react'

enum ButtonColor {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger'
}

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

enum ButtonAppearance {
  RECTANGLE = 'rectangle',
  SQUARE = 'square',
  CIRCLE = 'circle'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: EnumAsUnion<typeof ButtonColor>
  variant?: EnumAsUnion<typeof ButtonVariant>
  size?: EnumAsUnion<typeof ButtonSize>
  isIcon?: boolean
  appearance?: EnumAsUnion<typeof ButtonAppearance>
  loading?: boolean
}
