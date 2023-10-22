import cn from 'classnames'

import { Avatar } from '@shared/ui/Avatar'
import { Text } from '@shared/ui/Text'

import { type ProfileViewCardFC } from './ProfileViewCard.types'

import cls from './ProfileViewCard.module.scss'

export const ProfileViewCard: ProfileViewCardFC = (user) => {
  const fullName = `${user.fname} ${user.lname}`

  return (
    <div className={cn(cls['profile-card'])}>
      <Avatar avatarURL={user.avatar} className={cls.avatar} />

      <Text textAlign="center" heading={fullName} text={`@${user.username}`} />
    </div>
  )
}
