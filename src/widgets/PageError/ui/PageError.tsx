import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { Button } from '@shared/ui/Button'

import { type PageErrorFC } from './PageError.types'

import cls from './PageError.module.scss'

export const PageError: PageErrorFC = (props) => {
  const { error, resetErrorBoundary } = props

  const { t } = useTranslation('common')

  return (
    <div className={cn(cls['error-boundary'])}>
      <h2>{t('error_boundary')}</h2>
      <p>{error.message}</p>
      <Button variant="primary" onClick={resetErrorBoundary}>
        {t('refresh_page')}
      </Button>
    </div>
  )
}
