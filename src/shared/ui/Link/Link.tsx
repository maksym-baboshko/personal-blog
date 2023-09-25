import { useEffect } from 'react'

import cn from 'classnames'
import { Link as RouterLink } from 'react-router-dom'

import { LinkTheme } from './Link.theme'
import { type LinkFC } from './Link.types'

import cls from './Link.module.scss'

export const Link: LinkFC = (props) => {
  const { children, className, theme = LinkTheme.PRIMARY, ...restProps } = props

  useEffect(() => {}, [])

  return (
    <RouterLink className={cn(cls.link, cls[theme], className)} {...restProps}>
      {children}
    </RouterLink>
  )
}
