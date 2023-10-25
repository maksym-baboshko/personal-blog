import { memo, type FC } from 'react'

import { Profile } from '@entities/Profile'
import { AuthGuard } from '@shared/ui/AuthGuard'

import { useProfileData } from '../lib'

const ProfilePage: FC = memo(function ProfilePage() {
  const profileData = useProfileData()

  return (
    <AuthGuard>
      <Profile {...profileData} />
    </AuthGuard>
  )
})

export default ProfilePage
