import { memo } from 'react'

import cn from 'classnames'

import { sidebarItems } from '../../model'
import { useToggleSidebar } from '../../lib'
import { SidebarItem } from '../SidebarItem'
import { SidebarFooter } from '../SidebarFooter'

import { type SidebarFC } from './Sidebar.types'

import cls from './Sidebar.module.scss'

export const Sidebar: SidebarFC = memo(function Sidebar({ className }) {
  const { isCollapsed, onToggle } = useToggleSidebar()

  return (
    <div
      className={cn(cls.sidebar, { [cls.collapsed]: isCollapsed }, className)}
      data-testid="sidebar"
    >
      <div className={cls.items}>
        {sidebarItems.map((item) => (
          <SidebarItem key={item.path} item={item} isSidebarCollapsed={isCollapsed} />
        ))}
      </div>

      <SidebarFooter toggleSidebar={onToggle} isSidebarCollapsed={isCollapsed} />
    </div>
  )
})
