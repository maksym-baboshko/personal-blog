import cn from 'classnames'
import { Link as RouterLink } from 'react-router-dom'

import { LinkVariant, type LinkFC } from './Link.types'

import cls from './Link.module.scss'

export const Link: LinkFC = (props) => {
  const { children, className, variant = LinkVariant.PRIMARY, ...restProps } = props

  return (
    <RouterLink className={cn(cls.link, className, { [cls[variant]]: variant })} {...restProps}>
      {children}
    </RouterLink>
  )
}
