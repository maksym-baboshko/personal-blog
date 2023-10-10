import { type FC } from 'react'

export interface AuthModalProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
}

export type AuthModalFC = FC<AuthModalProps>
