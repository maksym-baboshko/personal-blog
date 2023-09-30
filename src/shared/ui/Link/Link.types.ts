import { type FC } from 'react'

import { type LinkProps as RouterLinkProps } from 'react-router-dom'

import { type EnumAsUnion } from '@shared/types'

export enum LinkVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface LinkProps extends RouterLinkProps {
  variant?: EnumAsUnion<typeof LinkVariant>
}

export type LinkFC = FC<LinkProps>
