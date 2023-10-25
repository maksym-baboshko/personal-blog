import { memo, type FC } from 'react'

import { useTranslation } from 'react-i18next'

import { Text } from '@shared/ui/Text'
import { AuthGuard } from '@shared/ui/AuthGuard'

const AboutPage: FC = memo(function AboutPage() {
  const { t } = useTranslation('about')

  return (
    <AuthGuard>
      <Text heading={t('title')} fullPage />
    </AuthGuard>
  )
})

export default AboutPage
