import { type ReactNode, type ButtonHTMLAttributes, type FC } from 'react'

import { type ButtonTheme } from './Button.theme'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme
  className?: string
  children: ReactNode
}

export type ButtonFC = FC<ButtonProps>
