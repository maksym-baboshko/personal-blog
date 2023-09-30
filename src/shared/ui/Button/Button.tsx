import cn from 'classnames'

import { type ButtonFC } from './Button.types'

import cls from './Button.module.scss'

export const Button: ButtonFC = (props) => {
  const { children, className, variant = '', ...restProps } = props

  return (
    <button className={cn(cls.button, className, { [cls[variant]]: variant })} {...restProps}>
      {children}
    </button>
  )
}
