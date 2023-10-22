import { memo, useMemo } from 'react'

import cn from 'classnames'

import { useTheme } from '@shared/hooks/ui'

import { getDefaultAvatar } from '../lib'

import { type AvatarFC } from './Avatar.types'

import cls from './Avatar.module.scss'

export const Avatar: AvatarFC = memo(function Avatar({ avatarURL, className }) {
  const { theme } = useTheme()

  const avatar = useMemo(() => avatarURL ?? getDefaultAvatar(theme), [theme, avatarURL])

  return (
    <div className={cn(cls.avatar, className)}>
      <img src={avatar} alt="Avatar" />
    </div>
  )
})
