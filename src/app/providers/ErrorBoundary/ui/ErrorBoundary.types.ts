import { type ReactNode, type FC } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

export type ErrorBoundaryFC = FC<ErrorBoundaryProps>
