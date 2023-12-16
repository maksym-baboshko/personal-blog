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
      loading,
      ...restProps
    } = props

    const classes = cn(
      cls.button,
      cls[size],
      {
        [cls.icon]: isIcon,
        [cls[color]]: color,
        [cls[variant]]: variant,
        [cls[appearance]]: appearance,
        [cls.loading]: loading
      },
      className
    )

    return (
      <button data-testid="button" ref={ref} className={classes} disabled={loading} {...restProps}>
        {loading && <span className={cls.spinner}></span>}
        <div className={cn(cls.content, { [cls.loading]: loading })}>{children}</div>
      </button>
    )
  })
)
