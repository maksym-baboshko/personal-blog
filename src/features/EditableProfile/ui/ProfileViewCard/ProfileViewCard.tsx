import cn from 'classnames'

import { Text } from '@shared/ui/Text'
import { Avatar } from '@shared/ui/Avatar'

import { type ProfileViewCardFC } from './ProfileViewCard.types'

import cls from './ProfileViewCard.module.scss'

export const ProfileViewCard: ProfileViewCardFC = (user) => {
  const fullName = `${user.fname} ${user.lname}`

  return (
    <div className={cn(cls['profile-card'])}>
      <Avatar src={user.avatar || undefined} className={cls.avatar} size="lg" />

      <Text textAlign="center" heading={fullName} text={`@${user.username}`} />
    </div>
  )
}
