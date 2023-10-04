import { LS_SIDEBAR_KEY } from '@shared/constants/localStorage'
import { useLocalStorage } from '@shared/hooks'

interface ToggleSidebar {
  isCollapsed: boolean
  onToggle: () => void
}

export const useToggleSidebar = (): ToggleSidebar => {
  const [isCollapsed, setIsCollapsed] = useLocalStorage(LS_SIDEBAR_KEY, true)

  const onToggle = (): void => {
    setIsCollapsed((isCollapsed) => !isCollapsed)
  }

  return { isCollapsed, onToggle }
}
