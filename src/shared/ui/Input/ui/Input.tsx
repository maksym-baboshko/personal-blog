import { memo, forwardRef, useRef, useImperativeHandle } from 'react'

import cn from 'classnames'

import { type InputProps } from './Input.types'

import cls from './Input.module.scss'

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
    const { className, size = 'md', autoComplete = 'off', fullWidth, ...restProps } = props

    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, [])

    const classes = cn(cls.input, cls[size], { [cls['full-width']]: fullWidth }, className)

    return <input ref={inputRef} className={classes} autoComplete={autoComplete} {...restProps} />
  })
)
