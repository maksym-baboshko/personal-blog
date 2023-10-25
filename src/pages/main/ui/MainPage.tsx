import { memo, type FC } from 'react'

import { useTranslation } from 'react-i18next'

import { Text } from '@shared/ui/Text'

const MainPage: FC = memo(function MainPage() {
  const { t } = useTranslation('main')

  return <Text heading={t('title')} fullPage />
})

export default MainPage
