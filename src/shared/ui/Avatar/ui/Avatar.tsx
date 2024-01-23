import { type SyntheticEvent, memo, useMemo, useState } from 'react'

import cn from 'classnames'

import { useTheme } from '@shared/hooks/ui'

import { getDefaultAvatar } from '../lib'

import { type AvatarFC } from './Avatar.types'

import cls from './Avatar.module.scss'

export const Avatar: AvatarFC = memo(function Avatar(props) {
  const { className, src, size = 'md', alt, isLoading, ...imgProps } = props

  const [isAvatarLoaded, setIsAvatarLoaded] = useState(false)
  const { theme } = useTheme()

  const defaultAvatar = useMemo(() => getDefaultAvatar(theme), [theme])
  const avatar = useMemo(() => src || defaultAvatar, [defaultAvatar, src])

  const handleAvatarError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    target.src = defaultAvatar
  }

  const handleAvatarLoad = () => {
    setIsAvatarLoaded(true)
  }

  return (
    <div className={cn(cls.avatar, { [cls[size]]: size, [cls.loading]: isLoading }, className)}>
      <img
        src={isAvatarLoaded ? avatar : defaultAvatar}
        alt={alt ?? 'Avatar'}
        onError={handleAvatarError}
        onLoad={handleAvatarLoad}
        {...imgProps}
      />
      {isLoading && <div className={cls.spinner} />}
    </div>
  )
})
