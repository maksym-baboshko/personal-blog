import { type InputHTMLAttributes } from 'react'

import { type EnumAsUnion } from '@shared/types'

enum InputSize {
  SM = 'sm',
  MD = 'md',
  LG = 'lg'
}

enum InputAutoComplete {
  OFF = 'off',
  FULL_NAME = 'name',
  GIVEN_NAME = 'given-name',
  FAMILY_NAME = 'family-name',
  EMAIL = 'email',
  NEW_PASSWORD = 'new-password',
  CURRENT_PASSWORD = 'current-password',
  SEX = 'sex'
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export interface InputProps extends HTMLInputProps {
  className?: string
  size?: EnumAsUnion<typeof InputSize>
  autoComplete?: EnumAsUnion<typeof InputAutoComplete>
  fullWidth?: boolean
}
