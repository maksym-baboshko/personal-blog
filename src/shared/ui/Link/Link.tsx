import cn from 'classnames'
import { Link as RouterLink } from 'react-router-dom'

import { type LinkFC } from './Link.types'

import cls from './Link.module.scss'

export const Link: LinkFC = (props) => {
  const { children, className, color = '', ...restProps } = props

  return (
    <RouterLink className={cn(cls.link, className, { [cls[color]]: color })} {...restProps}>
      {children}
    </RouterLink>
  )
}
