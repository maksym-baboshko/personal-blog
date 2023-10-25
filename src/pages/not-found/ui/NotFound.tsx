import { memo, type FC } from 'react'

import { useTranslation } from 'react-i18next'

import { Text } from '@shared/ui/Text'

export const NotFound: FC = memo(function NotFound() {
  const { t } = useTranslation('common')

  return <Text heading={t('page_not_found')} fullPage />
})
