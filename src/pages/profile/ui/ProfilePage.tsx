import { memo, type FC } from 'react'

import { Profile } from '@entities/Profile'

import { useProfileData } from '../lib'

const ProfilePage: FC = memo(function ProfilePage() {
  const profileData = useProfileData()

  return <Profile {...profileData} />
})

export default ProfilePage
