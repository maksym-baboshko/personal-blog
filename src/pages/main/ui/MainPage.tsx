import { memo, type FC } from 'react'

import { useTranslation } from 'react-i18next'

const MainPage: FC = memo(function MainPage() {
  const { t } = useTranslation('main')

  return <div>{t('title')}</div>
})

export default MainPage
