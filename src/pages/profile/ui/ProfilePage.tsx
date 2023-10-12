import { memo, type FC } from 'react'

import { useTranslation } from 'react-i18next'

import { UserProfile } from '@entities/User'

const ProfilePage: FC = memo(function ProfilePage() {
  const { t } = useTranslation('profile')

  return (
    <div>
      {t('title')}
      <UserProfile />
    </div>
  )
})

export default ProfilePage
