import { type FC } from 'react'

interface SidebarFooterProps {
  toggleSidebar: () => void
  isSidebarCollapsed: boolean
}

export type SidebarFooterFC = FC<SidebarFooterProps>
