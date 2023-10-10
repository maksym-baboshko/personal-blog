import { type FC } from 'react'

interface AuthFormProps {
  onSuccess?: () => void
}

export type AuthFormFC = FC<AuthFormProps>
