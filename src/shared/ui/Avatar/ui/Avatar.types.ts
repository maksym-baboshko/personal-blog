import { type ImgHTMLAttributes, type FC } from 'react'

enum AvatarSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg'
}

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  size?: EnumAsUnion<typeof AvatarSize>
}

export type AvatarFC = FC<AvatarProps>
