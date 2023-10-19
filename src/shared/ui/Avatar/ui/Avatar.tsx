import { memo, useMemo } from 'react'

import { useTheme } from '@shared/hooks/ui'

import { getDefaultAvatar } from '../lib'

import { type AvatarFC } from './Avatar.types'

import cls from './Avatar.module.scss'

export const Avatar: AvatarFC = memo(function Avatar({ avatarURL }) {
  const { theme } = useTheme()

  const avatar = useMemo(() => avatarURL ?? getDefaultAvatar(theme), [theme, avatarURL])

  return (
    <div className={cls.avatar}>
      <img src={avatar} alt="Avatar" />
    </div>
  )
})
