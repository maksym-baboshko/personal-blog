import cn from 'classnames'

import { Button } from '@shared/ui/Button'
import { useTheme } from '@shared/lib/hooks'
import { appThemes } from '@shared/constants/appTheme'

import { type ThemeSwitcherFC } from './ThemeSwitcher.types'

import cls from './ThemeSwitcher.module.scss'

export const ThemeSwitcher: ThemeSwitcherFC = ({ className }) => {
  const { nextThemeIdx, toggleTheme } = useTheme()
  const backgroundColor = appThemes[nextThemeIdx].color

  return (
    <Button
      onClick={toggleTheme}
      className={cn(cls.switcher, className)}
      style={{ backgroundColor }}
    />
  )
}
