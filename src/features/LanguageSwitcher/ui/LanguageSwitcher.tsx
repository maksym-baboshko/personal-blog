import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { Button } from '@shared/ui/Button'
import { getNextLang } from '../lib/changeLanguage'

import { type LanguageSwitcherFC } from './LanguageSwitcher.types'

import cls from './LanguageSwitcher.module.scss'

export const LanguageSwitcher: LanguageSwitcherFC = ({ className }) => {
  const { i18n } = useTranslation()

  const nextLang = getNextLang(i18n.language)
  const handleLangChange = async (): Promise<void> => {
    await i18n.changeLanguage(nextLang)
  }

  return (
    <Button onClick={handleLangChange} className={cn(cls.switcher, className)}>
      {nextLang.toUpperCase()}
    </Button>
  )
}
