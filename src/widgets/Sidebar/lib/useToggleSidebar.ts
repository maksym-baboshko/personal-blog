import { useEffect, useState } from 'react'

import { LS_SIDEBAR_KEY } from '@shared/constants/localStorage'

interface ToggleSidebar {
  isCollapsed: boolean
  onToggle: () => void
}

export const useToggleSidebar = (): ToggleSidebar => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const onToggle = (): void => {
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

  return { isCollapsed, onToggle }
}
