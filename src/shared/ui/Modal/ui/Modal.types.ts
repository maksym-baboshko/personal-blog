import { type ReactNode, type FC } from 'react'

interface ModalProps {
  className?: string
  contentClassName?: string
  children?: ReactNode
  isOpen?: boolean
  isClosingRemotely?: boolean
  onClose?: () => void
}

export type ModalFC = FC<ModalProps>
