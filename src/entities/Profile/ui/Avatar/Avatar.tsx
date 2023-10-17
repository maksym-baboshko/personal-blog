import { memo, useMemo } from 'react'

import { useTheme } from '@shared/hooks/ui'
import { getDefaultAvatar } from '@shared/lib/common/getDefaultAvatar'

import { type AvatarFC } from './Avatar.types'

import cls from './Avatar.module.scss'

export const Avatar: AvatarFC = memo(function Avatar({ avatar }) {
  const { theme } = useTheme()

  const ava = useMemo(() => avatar ?? getDefaultAvatar(theme), [theme, avatar])

  return (
    <div className={cls.avatar}>
      <img src={ava} alt="Avatar" />
    </div>
  )
})
