import { memo } from 'react'

import cn from 'classnames'
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom'

import { type LinkFC } from './Link.types'

import cls from './Link.module.scss'

export const Link: LinkFC = memo(function Link(props) {
  const {
    end,
    exact,
    children,
    disabled,
    className,
    isNavLink,
    color = '',
    underline = 'none',
    activeLinkCN = cls.active,
    ...restProps
  } = props

  const classes = cn(
    cls.link,
    cls[`underline-${underline}`],
    { [cls[color]]: color, [cls.disabled]: disabled },
    className
  )

  return (
    <>
      {isNavLink && (
        <RouterNavLink
          end={exact ?? end}
          className={({ isActive }) => cn(classes, { [activeLinkCN]: isActive })}
          {...restProps}
        >
          {children}
        </RouterNavLink>
      )}
      {!isNavLink && (
        <RouterLink className={classes} {...restProps}>
          {children}
        </RouterLink>
      )}
    </>
  )
})
