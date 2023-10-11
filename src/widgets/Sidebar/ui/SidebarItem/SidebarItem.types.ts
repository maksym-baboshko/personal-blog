import { type FC } from 'react'

import { type ISidebarItem } from '../../model'

interface SidebarItemProps {
  item: ISidebarItem
  isSidebarCollapsed: boolean
}

export type SidebarItemFC = FC<SidebarItemProps>
