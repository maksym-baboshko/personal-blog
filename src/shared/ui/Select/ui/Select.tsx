import { forwardRef, memo } from 'react'

import cn from 'classnames'

import { type SelectProps } from './Select.types'

import cls from './Select.module.scss'

export const Select = memo(
  forwardRef<HTMLSelectElement, SelectProps>(function Select(props, ref) {
    const { options = [], className, size = 'md', placeholder, ...restProps } = props

    const classes = cn(cls.select, { [cls[size]]: size }, className)

    return (
      <div className={cls['select-wrapper']}>
        <select ref={ref} className={classes} {...restProps}>
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
  })
)
