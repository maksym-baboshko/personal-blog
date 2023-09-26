import cn from 'classnames'

import { Button } from '@shared/ui/Button'
import { useTheme } from '@shared/lib/hooks/useTheme'
import { ThemeSwitcher } from '@features/ThemeSwitcher'
import { LanguageSwitcher } from '@features/LanguageSwitcher'
import BurgerIcon from '@shared/assets/icons/burger.svg'

import { useCollapseSidebar } from '../lib/useCollapseSidebar'

import { type SidebarFC } from './Sidebar.types'

import cls from './Sidebar.module.scss'

export const Sidebar: SidebarFC = ({ className }) => {
  const { isCollapsed, onCollapse } = useCollapseSidebar()
  const { theme } = useTheme()

  return (
    <div className={cn(cls.sidebar, { [cls.collapsed]: isCollapsed }, className)}>
      <Button onClick={onCollapse}>
        <BurgerIcon fill={theme === 'light' ? '#fff' : '#000'} />
      </Button>

      <div className={cls.switchers}>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  )
}
