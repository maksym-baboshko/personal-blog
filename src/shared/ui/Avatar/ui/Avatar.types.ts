import { type FC } from 'react'

interface AvatarProps {
  className?: string
  avatarURL: string | undefined
}

export type AvatarFC = FC<AvatarProps>
