import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { Button } from '@shared/ui/Button'

import { getNextLang } from '../lib/changeLanguage'

import { type LanguageSwitcherFC } from './LanguageSwitcher.types'

import cls from './LanguageSwitcher.module.scss'

export const LanguageSwitcher: LanguageSwitcherFC = ({ className }) => {
  const { i18n, t } = useTranslation()

  const nextLang = getNextLang(i18n.language)
  const handleLangChange = async (): Promise<void> => {
    await i18n.changeLanguage(nextLang)
  }

  return (
    <div onClick={handleLangChange} className={cn(cls.switcher, className)}>
      <Button className={cls.btn} size="xs">
        {nextLang.toUpperCase()}
      </Button>
      <span>{t('language')}</span>
    </div>
  )
}
