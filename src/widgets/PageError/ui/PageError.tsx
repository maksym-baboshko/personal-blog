import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { type PageErrorFC } from './PageError.types'

import cls from './PageError.module.scss'

export const PageError: PageErrorFC = (props) => {
  const { error, resetErrorBoundary } = props

  const { t } = useTranslation('common')

  return (
    <div className={cn(cls['error-boundary'])}>
      <h2>{t('error_boundary')}</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>{t('refresh_page')}</button>
    </div>
  )
}
