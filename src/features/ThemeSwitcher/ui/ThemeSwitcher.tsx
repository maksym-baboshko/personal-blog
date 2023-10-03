import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { Button } from '@shared/ui/Button'
import { useTheme } from '@shared/lib/hooks'
import { appThemes } from '@shared/constants/appTheme'

import { type ThemeSwitcherFC } from './ThemeSwitcher.types'

import cls from './ThemeSwitcher.module.scss'

export const ThemeSwitcher: ThemeSwitcherFC = ({ className }) => {
  const { nextThemeIdx, toggleTheme } = useTheme()
  const { t } = useTranslation()

  const backgroundColor = appThemes[nextThemeIdx].color

  return (
    <div onClick={toggleTheme} className={cn(cls.switcher, className)}>
      <Button className={cls.btn} style={{ backgroundColor }} />
      <span>{t('theme')}</span>
    </div>
  )
}
