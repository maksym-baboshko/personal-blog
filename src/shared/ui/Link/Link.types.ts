import { type FC } from 'react'

import { type LinkProps as RouterLinkProps } from 'react-router-dom'

import { type EnumAsUnion } from '@shared/types'

export enum LinkColor {
  PRIMARY = 'primary'
}

interface LinkProps extends RouterLinkProps {
  color?: EnumAsUnion<typeof LinkColor>
}

export type LinkFC = FC<LinkProps>
