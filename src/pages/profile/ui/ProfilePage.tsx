import { memo, type FC } from 'react'

import { Profile } from '@entities/Profile'

const ProfilePage: FC = memo(function ProfilePage() {
  return <Profile />
})

export default ProfilePage
