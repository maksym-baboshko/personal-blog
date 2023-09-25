import { type FC } from 'react'
import { type LinkProps as RouterLinkProps } from 'react-router-dom'

import { type LinkTheme } from './Link.theme'

interface LinkProps extends RouterLinkProps {
  theme?: LinkTheme
}

export type LinkFC = FC<LinkProps>
