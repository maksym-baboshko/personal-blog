import cn from 'classnames'

import { Button } from '@shared/ui/Button'
import { useTheme } from '@shared/lib/hooks'
import { AppTheme } from '@shared/constants/appTheme'
import { ThemeSwitcher } from '@features/ThemeSwitcher'
import { LanguageSwitcher } from '@features/LanguageSwitcher'
import BurgerIcon from '@shared/assets/icons/burger.svg'

import { useToggleSidebar } from '../lib/useToggleSidebar'

import { type SidebarFC } from './Sidebar.types'

import cls from './Sidebar.module.scss'

export const Sidebar: SidebarFC = ({ className }) => {
  const { isCollapsed, onToggle } = useToggleSidebar()
  const { theme } = useTheme()

  return (
    <div
      className={cn(cls.sidebar, { [cls.collapsed]: isCollapsed }, className)}
      data-testid="sidebar"
    >
      <Button onClick={onToggle} data-testid="sidebar-toggle">
        <BurgerIcon fill={theme === AppTheme.LIGHT ? '#fff' : '#000'} />
      </Button>

      <div className={cls.switchers}>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  )
}
