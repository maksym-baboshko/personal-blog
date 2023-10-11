import { useCallback } from 'react'

import { LS_SIDEBAR_KEY } from '@shared/constants/localStorage'
import { useLocalStorage } from '@shared/hooks'

interface ToggleSidebar {
  isCollapsed: boolean
  onToggle: () => void
}

export const useToggleSidebar = (): ToggleSidebar => {
  const [isCollapsed, setIsCollapsed] = useLocalStorage(LS_SIDEBAR_KEY, true)

  const onToggle = useCallback((): void => {
    setIsCollapsed((isCollapsed) => !isCollapsed)
  }, [setIsCollapsed])

  return { isCollapsed, onToggle }
}
