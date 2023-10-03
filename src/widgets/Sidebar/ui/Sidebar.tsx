import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { Link } from '@shared/ui/Link'
import { Button } from '@shared/ui/Button'
import { routesConfig } from '@app/config/router'
import { ThemeSwitcher } from '@features/ThemeSwitcher'
import { LanguageSwitcher } from '@features/LanguageSwitcher'
import MainIcon from '@shared/assets/icons/main.svg'
import AboutIcon from '@shared/assets/icons/about.svg'
import ArrowIcon from '@shared/assets/icons/arrow-right-circle.svg'

import { useToggleSidebar } from '../lib/useToggleSidebar'

import { type SidebarFC } from './Sidebar.types'

import cls from './Sidebar.module.scss'

export const Sidebar: SidebarFC = ({ className }) => {
  const { isCollapsed, onToggle } = useToggleSidebar()
  const { t } = useTranslation('common')

  return (
    <div
      className={cn(cls.sidebar, { [cls.collapsed]: isCollapsed }, className)}
      data-testid="sidebar"
    >
      <div className={cls.items}>
        <Link to={routesConfig.main.path} className={cls.item} underline="hover">
          <MainIcon className={cls['item-icon']} />
          <span className={cls['item-text']}>{t('main')}</span>
        </Link>

        <Link to={routesConfig.about.path} className={cls.item} underline="hover">
          <AboutIcon className={cls['item-icon']} />
          <span className={cls['item-text']}>{t('about')}</span>
        </Link>
      </div>

      <div className={cls['sidebar-footer']}>
        <Button onClick={onToggle} className={cls['arrow-btn']} isIcon data-testid="sidebar-toggle">
          <ArrowIcon className={cls['arrow-icon']} />
        </Button>

        <div className={cls.switchers}>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}
