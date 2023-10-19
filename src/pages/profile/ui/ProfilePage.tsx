import { memo, type FC } from 'react'

import { Profile } from '@entities/Profile'
import { selectUserData } from '@entities/User'
import { useAppSelector } from '@shared/hooks/store'

const ProfilePage: FC = memo(function ProfilePage() {
  const user = useAppSelector(selectUserData)
  const readonly = false

  return <Profile user={user} readonly={readonly} />
})

export default ProfilePage
