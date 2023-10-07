import { type ChangeEvent, memo, forwardRef, useRef, useEffect, useImperativeHandle } from 'react'

import cn from 'classnames'

import { type InputProps } from './Input.types'

import cls from './Input.module.scss'

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
    const {
      className,
      size = 'md',
      autoComplete = 'off',
      autoFocus,
      value,
      onChange,
      ...restProps
    } = props

    const inputRef = useRef<HTMLInputElement>(null)

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    useImperativeHandle(ref, () => inputRef.current!, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => onChange?.(e.target.value)

    useEffect(() => {
      if (autoFocus) {
        inputRef.current?.focus()
      }
    }, [autoFocus])

    return (
      <input
        value={value}
        onChange={handleChange}
        ref={inputRef}
        autoFocus={autoFocus}
        className={cn(cls.input, cls[size], className)}
        autoComplete={autoComplete}
        {...restProps}
      />
    )
  })
)
