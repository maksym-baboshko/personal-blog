import { type SelectHTMLAttributes } from 'react'

export enum InputAutoComplete {
  OFF = 'off',
  FULL_NAME = 'name',
  GIVEN_NAME = 'given-name',
  FAMILY_NAME = 'family-name',
  EMAIL = 'email',
  NEW_PASSWORD = 'new-password',
  CURRENT_PASSWORD = 'current-password',
  SEX = 'sex'
}

enum InputSize {
  SM = 'sm',
  MD = 'md',
  LG = 'lg'
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  placeholder?: string
  options: Array<{ label: string; value: string }>
  size?: EnumAsUnion<typeof InputSize>
  fullWidth?: boolean
  autoComplete?: EnumAsUnion<typeof InputAutoComplete>
}
