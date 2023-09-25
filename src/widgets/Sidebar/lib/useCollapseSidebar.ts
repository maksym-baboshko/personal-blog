import { useEffect, useState } from 'react'

import { LS_SIDEBAR_KEY } from '@shared/constants/localStorage'

interface CollapseSidebar {
  isCollapsed: boolean
  onCollapse: () => void
}

export const useCollapseSidebar = (): CollapseSidebar => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const onCollapse = (): void => {
    if (isCollapsed) {
      localStorage.setItem(LS_SIDEBAR_KEY, 'expanded')
    } else {
      localStorage.setItem(LS_SIDEBAR_KEY, 'collapsed')
    }

    setIsCollapsed((prev) => !prev)
  }

  useEffect(() => {
    const sidebar = localStorage.getItem(LS_SIDEBAR_KEY)

    if (sidebar !== null) {
      setIsCollapsed(sidebar === 'collapsed')
    }
  }, [])

  return { isCollapsed, onCollapse }
}
