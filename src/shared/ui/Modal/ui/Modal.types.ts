import { type ReactNode, type FC } from 'react'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export type ModalFC = FC<ModalProps>
