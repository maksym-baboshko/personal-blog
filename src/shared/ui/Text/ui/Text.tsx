import { memo } from 'react'

import cn from 'classnames'

import { type TextFC } from './Text.types'

import cls from './Text.module.scss'

export const Text: TextFC = memo(function Text({ className, heading, text, color = 'default' }) {
  const classes = cn(cls.wrapper, cls[color], className)

  return (
    <div className={classes}>
      {heading && <h3 className={cls.heading}>{heading}</h3>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
})
