import { memo, type FC } from 'react'

import { useTranslation } from 'react-i18next'

const AboutPage: FC = memo(function AboutPage() {
  const { t } = useTranslation('about')

  return <div>{t('title')}</div>
})

export default AboutPage
