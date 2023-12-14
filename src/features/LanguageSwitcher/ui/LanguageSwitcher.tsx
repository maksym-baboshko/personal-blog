import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { Button } from '@shared/ui/Button'
import { useAuthGuard } from '@shared/hooks/common'

import { useLangSwitcher } from '../lib'

import { type LanguageSwitcherFC } from './LanguageSwitcher.types'

import cls from './LanguageSwitcher.module.scss'

export const LanguageSwitcher: LanguageSwitcherFC = ({ className, size = 'xs' }) => {
  const { nextLang, handleLangChange } = useLangSwitcher()
  const { isAccessAllowed } = useAuthGuard()
  const { t } = useTranslation()

  return (
    <div className={cn(cls.switcher)} onClick={handleLangChange} role="button">
      <Button
        size={size}
        color="default"
        variant="outlined"
        appearance="square"
        className={className}
      >
        {nextLang.toUpperCase()}
      </Button>

      {isAccessAllowed && <span>{t('language')}</span>}
    </div>
  )
}
