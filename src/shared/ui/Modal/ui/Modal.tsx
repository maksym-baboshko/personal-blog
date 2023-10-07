import { useState, type MouseEvent, useRef, useEffect, useCallback } from 'react'

import cn from 'classnames'

import { Portal } from '@shared/ui/Portal'

import { type ModalFC } from './Modal.types'

import cls from './Modal.module.scss'

const CLOSE_ANIMATION_DELAY = 400

export const Modal: ModalFC = (props) => {
  const { children, className, isOpen, onClose } = props

  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const classes = cn(
    cls.modal,
    {
      [cls.opened]: isMounted,
      [cls.closing]: isClosing
    },
    className
  )

  const handleContentClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation()
  }

  const handleClose = useCallback((): void => {
    if (onClose) {
      setIsClosing(true)

      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, CLOSE_ANIMATION_DELAY)
    }
  }, [onClose])

  const handleKeydown = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        e.preventDefault()
        handleClose()
      }
    },
    [handleClose]
  )

  useEffect(() => {
    if (!isOpen) return

    setIsMounted(true)
    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
      setIsMounted(false)

      if (timerRef.current) {
        clearTimeout(timerRef.current)
        timerRef.current = null
      }
    }
  }, [isOpen, handleKeydown])

  if (!isOpen) return null

  return (
    <Portal>
      <div className={classes}>
        <div onClick={handleClose} className={cls.overlay}>
          <div className={cls.content} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
