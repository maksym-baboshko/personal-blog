import { type FC } from 'react'

interface AuthFormProps {
  onSuccess?: () => void
  isModalClosing?: boolean
}

export type AuthFormFC = FC<AuthFormProps>
