import { memo, forwardRef, useRef, useImperativeHandle } from 'react'

import cn from 'classnames'

import { type InputProps } from './Input.types'

import cls from './Input.module.scss'

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
    const {
      label,
      fullWidth,
      className,
      isInvalid,
      size = 'md',
      errorMessage,
      autoComplete = 'off',
      ...restProps
    } = props

    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, [])

    const classes = cn(cls.input, cls[size], {
      [cls['full-width']]: fullWidth,
      [cls['invalid-input']]: isInvalid
    })

    return (
      <div className={cn(cls['input-wrapper'], { [cls.invalid]: isInvalid }, className)}>
        <label htmlFor={props.id} hidden={!label}>
          {label}:
        </label>

        <input ref={inputRef} className={classes} autoComplete={autoComplete} {...restProps} />

        {isInvalid && <p className={cls['error-message']}>{errorMessage}</p>}
      </div>
    )
  })
)
