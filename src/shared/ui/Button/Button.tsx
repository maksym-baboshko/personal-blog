import { forwardRef, memo } from 'react'

import cn from 'classnames'

import { type ButtonProps } from './Button.types'

import cls from './Button.module.scss'

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
    const { children, className, variant = 'light', size = 'md', isIcon, ...restProps } = props

    const classes = cn(
      cls.button,
      cls[size],
      { [cls[variant]]: variant, [cls.icon]: isIcon },
      className
    )

    return (
      <button ref={ref} className={classes} {...restProps}>
        {children}
      </button>
    )
  })
)
