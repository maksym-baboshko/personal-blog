import { type FC } from 'react'

interface AuthModalProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
}

export type AuthModalFC = FC<AuthModalProps>
