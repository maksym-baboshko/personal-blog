import cn from 'classnames'

import { type ButtonFC } from './Button.types'

import cls from './Button.module.scss'

export const Button: ButtonFC = (props) => {
  const { children, className, variant = 'light', size = 'md', isIcon, ...restProps } = props

  const classes = cn(
    cls.button,
    cls[size],
    { [cls[variant]]: variant, [cls.icon]: isIcon },
    className
  )

  return (
    <button className={classes} {...restProps}>
      {children}
    </button>
  )
}
