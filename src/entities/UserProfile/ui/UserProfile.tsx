import cn from 'classnames'

import { type UserProfileFC } from './UserProfile.types'

import cls from './UserProfile.module.scss'

export const UserProfile: UserProfileFC = () => {
  return <div className={cn(cls.wrapper)}></div>
}
