import { useCallback, type FC } from 'react'

import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import { useRouteError } from 'react-router-dom'

import { Button } from '@shared/ui/Button'

import cls from './PageError.module.scss'

export const PageError: FC = () => {
  const error = useRouteError() as Error
  const { t } = useTranslation('common')

  const handleResetError = useCallback(() => {
    location.reload()
  }, [])

  return (
    <div className={cn(cls['error-boundary'])}>
      <h2>{t('error_boundary')}</h2>
      <p>{error.message}</p>
      <Button variant="solid" onClick={handleResetError}>
        {t('refresh_page')}
      </Button>
    </div>
  )
}
