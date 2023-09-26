import { type FC } from 'react'

import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import cls from './NotFound.module.scss'

export const NotFound: FC = (props) => {
  const { t } = useTranslation('common')

  return <div className={cn(cls['not-found'])}>{t('page_not_found')}</div>
}
