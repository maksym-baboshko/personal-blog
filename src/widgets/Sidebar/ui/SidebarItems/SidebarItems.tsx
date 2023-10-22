import { selectUserId } from '@entities/User'
import { useAppSelector } from '@shared/hooks/store'
import { getProfileRoute } from '@shared/constants/router'

import { SidebarItem } from '../SidebarItem'
import { sidebarItems } from '../../model/sidebarItems'

import { type SidebarItemsFC } from './SidebarItems.types'

import cls from './SidebarItems.module.scss'

export const SidebarItems: SidebarItemsFC = ({ isSidebarCollapsed }) => {
  const userId = useAppSelector(selectUserId)

  return (
    <div className={cls.items}>
      {sidebarItems.map((item) => {
        const { path, textKey } = item
        const correctPath = textKey === 'profile' && userId ? getProfileRoute(userId) : path

        return (
          <SidebarItem
            key={path}
            item={{ ...item, path: correctPath }}
            isSidebarCollapsed={isSidebarCollapsed}
          />
        )
      })}
    </div>
  )
}
