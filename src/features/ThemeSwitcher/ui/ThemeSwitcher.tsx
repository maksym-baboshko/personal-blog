import cn from 'classnames'

import { Button } from '@shared/ui/Button'
import { Theme } from '@app/lib/context/ThemeContext'
import { useTheme } from '@shared/lib/hooks/useTheme'

import DarkIcon from '@shared/assets/icons/theme-dark.svg'
import LightIcon from '@shared/assets/icons/theme-light.svg'

import { type ThemeSwitcherFC } from './ThemeSwitcher.types'

import cls from './ThemeSwitcher.module.scss'

export const ThemeSwitcher: ThemeSwitcherFC = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button onClick={toggleTheme} className={cn(cls.switcher, className)}>
      {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}
