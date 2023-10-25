import { forwardRef, memo } from 'react'

import cn from 'classnames'

import { type ButtonProps } from './Button.types'

import cls from './Button.module.scss'

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
    const {
      isIcon,
      children,
      className,
      size = 'md',
      variant = 'light',
      color = 'primary',
      appearance = 'rectangle',
      ...restProps
    } = props

    const classes = cn(
      cls.button,
      cls[size],
      {
        [cls.icon]: isIcon,
        [cls[color]]: color,
        [cls[variant]]: variant,
        [cls[appearance]]: appearance
      },
      className
    )

    return (
      <button ref={ref} className={classes} {...restProps}>
        {children}
      </button>
    )
  })
)
