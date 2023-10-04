import { type ReactNode, type FC } from 'react'

interface PortalProps {
  children: ReactNode
  container?: Element | null
}

export type PortalFC = FC<PortalProps>
