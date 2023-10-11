import { memo } from 'react'

import cn from 'classnames'
import { Link as RouterLink } from 'react-router-dom'

import { type LinkFC } from './Link.types'

import cls from './Link.module.scss'

export const Link: LinkFC = memo(function Link(props) {
  const { children, className, color = '', underline = 'none', ...restProps } = props

  return (
    <RouterLink
      className={cn(cls.link, cls[`underline-${underline}`], { [cls[color]]: color }, className)}
      {...restProps}
    >
      {children}
    </RouterLink>
  )
})
