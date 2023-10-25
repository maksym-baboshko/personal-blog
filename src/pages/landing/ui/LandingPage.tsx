import { memo, type FC } from 'react'

import { useTranslation } from 'react-i18next'

import { Text } from '@shared/ui/Text'

const LandingPage: FC = memo(function LandingPage() {
  const { t } = useTranslation('landing')

  return <Text heading={t('title')} fullPage />
})

export default LandingPage
