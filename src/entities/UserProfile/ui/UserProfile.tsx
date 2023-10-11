import cn from 'classnames'

import { useLazyReducers } from '@shared/hooks'
import { type AppReducers } from '@shared/types'

import { userProfileReducer } from '../model/slice'

import { type UserProfileFC } from './UserProfile.types'

import cls from './UserProfile.module.scss'

const initialReducers: AppReducers = { userProfile: userProfileReducer }

export const UserProfile: UserProfileFC = () => {
  useLazyReducers(initialReducers)

  return <div className={cn(cls.wrapper)}></div>
}
