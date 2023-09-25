import cn from 'classnames'

import { ButtonTheme } from './Button.theme'
import { type ButtonFC } from './Button.types'

import cls from './Button.module.scss'

export const Button: ButtonFC = (props) => {
  const { children, className, theme = ButtonTheme.CLEAR, ...restProps } = props

  return (
    <button className={cn(cls.button, cls[theme], className)} {...restProps}>
      {children}
    </button>
  )
}
