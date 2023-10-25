import { memo } from 'react'

import cn from 'classnames'

import { Button } from '@shared/ui/Button'
import { ThemeSwitcher } from '@features/ThemeSwitcher'
import { LanguageSwitcher } from '@features/LanguageSwitcher'
import ArrowIcon from '@shared/assets/icons/arrow.svg'

import { type SidebarFooterFC } from './SidebarFooter.types'

import cls from './SidebarFooter.module.scss'

export const SidebarFooter: SidebarFooterFC = memo(function SidebarFooter(props) {
  const { toggleSidebar, isSidebarCollapsed } = props

  return (
    <div className={cn(cls['sidebar-footer'], { [cls.collapsed]: isSidebarCollapsed })}>
      <Button
        onClick={toggleSidebar}
        className={cls['arrow-btn']}
        isIcon
        data-testid="sidebar-toggle"
      >
        <ArrowIcon className={cls['arrow-icon']} />
      </Button>

      <div className={cls.switchers}>
        <LanguageSwitcher className={cls['lang-switcher']} />
        <ThemeSwitcher />
      </div>
    </div>
  )
})
