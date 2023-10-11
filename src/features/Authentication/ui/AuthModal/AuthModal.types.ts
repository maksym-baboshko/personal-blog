import { type FC } from 'react'

export interface AuthModalProps {
  isOpen?: boolean
  onClose?: () => void
}

export type AuthModalFC = FC<AuthModalProps>
