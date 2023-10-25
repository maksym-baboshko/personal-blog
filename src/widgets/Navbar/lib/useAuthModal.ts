import { useCallback, useRef, useState } from 'react'

export const useAuthModal = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const loginBtnRef = useRef<HTMLButtonElement>(null)

  const closeAuthModal = useCallback(() => {
    setIsAuthModalOpen(false)
    loginBtnRef.current?.focus()
  }, [])

  const openAuthModal = useCallback(() => {
    setIsAuthModalOpen(true)
  }, [])

  return { isAuthModalOpen, loginBtnRef, openAuthModal, closeAuthModal }
}
