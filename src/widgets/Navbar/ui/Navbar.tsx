import { useCallback, useRef, useState } from 'react'

import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { Button } from '@shared/ui/Button'
import { AuthModal } from '@features/AuthByEmail'

import { type NavbarFC } from './Navbar.types'

import cls from './Navbar.module.scss'

export const Navbar: NavbarFC = ({ className }) => {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const loginBtnRef = useRef<HTMLButtonElement>(null)

  const { t } = useTranslation('common')

  const closeAuthModal = useCallback(() => {
    setShowAuthModal(false)
    loginBtnRef.current?.focus()
  }, [])

  const openAuthModal = useCallback(() => {
    setShowAuthModal(true)
  }, [])

  return (
    <div className={cn(cls.navbar, className)}>
      <div className={cls.wrapper}>
        <Button onClick={openAuthModal} ref={loginBtnRef} variant="outlined" size="sm">
          {t('login')}
        </Button>
      </div>

      <AuthModal isOpen={showAuthModal} onClose={closeAuthModal} />
    </div>
  )
}
