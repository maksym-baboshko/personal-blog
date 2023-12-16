import cn from 'classnames'

import { Text } from '@shared/ui/Text'
import { Avatar } from '@shared/ui/Avatar'

import { type ProfileViewCardFC } from './ProfileViewCard.types'

import cls from './ProfileViewCard.module.scss'

export const ProfileViewCard: ProfileViewCardFC = (user) => {
  const fullName = `${user.fname} ${user.lname}`

  return (
    <div className={cn(cls['profile-card'])}>
      <Avatar
        size="lg"
        className={cls.avatar}
        src={user.avatar || undefined}
        isLoading={user.isAvatarUpdating}
      />

      <Text textAlign="center" heading={fullName} text={`@${user.username}`} />
    </div>
  )
}
