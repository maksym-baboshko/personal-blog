import { useCallback, useEffect, useRef, useState } from 'react'

import { CLOSE_ANIMATION_DELAY } from '../../ui/Modal'

export const useCloseModalRemotely = (onClose?: () => void) => {
  const [isClosing, setIsClosing] = useState(false)

  const closingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleClose = useCallback((): void => {
    setIsClosing(true)

    closingTimerRef.current = setTimeout(() => {
      onClose && onClose()
      setIsClosing(false)
    }, CLOSE_ANIMATION_DELAY)
  }, [onClose])

  useEffect(
    () => () => {
      if (closingTimerRef.current) {
        clearTimeout(closingTimerRef.current)
        closingTimerRef.current = null
      }
    },
    []
  )

  return { isClosing, onClose: handleClose }
}
