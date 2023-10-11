import { memo, useCallback, useRef, useState } from 'react'

import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { Button } from '@shared/ui/Button'
import { AuthModal } from '@features/Authentication'
import { useAppDispatch, useAppSelector } from '@shared/hooks'
import { getUserAuthStatus, getUserInitialStatus, userActions } from '@entities/User'

import { type NavbarFC } from './Navbar.types'

import cls from './Navbar.module.scss'

export const Navbar: NavbarFC = memo(function Navbar({ className }) {
  const userInitialStatus = useAppSelector(getUserInitialStatus)
  const isUserAuthorized = useAppSelector(getUserAuthStatus)
  const isUserInitializing = userInitialStatus === 'loading'
  const dispatch = useAppDispatch()

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

  const logOut = useCallback(() => {
    dispatch(userActions.logOut())
  }, [dispatch])

  return (
    <div className={cn(cls.navbar, className)}>
      <div className={cls.wrapper}>
        {!isUserAuthorized && !isUserInitializing && (
          <>
            <Button onClick={openAuthModal} ref={loginBtnRef} variant="outlined" size="sm">
              {t('login')}
            </Button>
            <AuthModal isOpen={showAuthModal} onClose={closeAuthModal} />
          </>
        )}
        {isUserAuthorized && (
          <Button onClick={logOut} variant="outlined" size="sm">
            {t('logout')}
          </Button>
        )}
      </div>
    </div>
  )
})
