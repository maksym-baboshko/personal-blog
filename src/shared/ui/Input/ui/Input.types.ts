import { type InputHTMLAttributes } from 'react'

enum InputSize {
  SM = 'sm',
  MD = 'md',
  LG = 'lg'
}

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

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export interface InputProps extends HTMLInputProps {
  size?: EnumAsUnion<typeof InputSize>
  autoComplete?: EnumAsUnion<typeof InputAutoComplete>
  fullWidth?: boolean
  label?: string
  isInvalid?: boolean
  errorMessage?: string
}
