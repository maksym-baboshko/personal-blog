import { memo } from 'react'

import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { Link } from '@shared/ui/Link'

import { type SidebarItemFC } from './SidebarItem.types'

import cls from './SidebarItem.module.scss'

export const SidebarItem: SidebarItemFC = memo(function SidebarItem({ item, isSidebarCollapsed }) {
  const { path, textKey, icon: Icon } = item

  const { t } = useTranslation('common')

  return (
    <Link
      to={path}
      isNavLink
      underline="hover"
      className={cn(cls.item, { [cls.collapsed]: isSidebarCollapsed })}
    >
      <Icon className={cls['item-icon']} />
      <span className={cls['item-text']}>{t(textKey)}</span>
    </Link>
  )
})
