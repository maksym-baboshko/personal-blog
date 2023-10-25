import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { Button } from '@shared/ui/Button'
import { useAuth } from '@shared/hooks/common'

import { useLangSwitcher } from '../lib'

import { type LanguageSwitcherFC } from './LanguageSwitcher.types'

import cls from './LanguageSwitcher.module.scss'

export const LanguageSwitcher: LanguageSwitcherFC = ({ className, size = 'xs' }) => {
  const { nextLang, handleLangChange } = useLangSwitcher()
  const { isAccessAllowed } = useAuth()
  const { t } = useTranslation()

  return (
    <div className={cn(cls.switcher)}>
      <Button
        size={size}
        color="default"
        variant="outlined"
        appearance="square"
        className={className}
        onClick={handleLangChange}
      >
        {nextLang.toUpperCase()}
      </Button>

      {isAccessAllowed && <span>{t('language')}</span>}
    </div>
  )
}
