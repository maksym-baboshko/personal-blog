import { memo, useCallback, useRef, useState } from 'react'

import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { Button } from '@shared/ui/Button'
import { userActions } from '@entities/User'
import { useAuthState } from '@shared/hooks/common'
import { AuthModal } from '@features/Authentication'
import { useAppDispatch } from '@shared/hooks/store'
import { useGetUserQueryState } from '@shared/api/user'

import { type NavbarFC } from './Navbar.types'

import cls from './Navbar.module.scss'

export const Navbar: NavbarFC = memo(function Navbar({ className }) {
  const { userId, isUserLoggedIn, isUserLoggedOut, isUserAuthenticating } = useAuthState()
  const { isLoading: isUserLoading } = useGetUserQueryState(userId)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const loginBtnRef = useRef<HTMLButtonElement>(null)
  const { t } = useTranslation('common')
  const dispatch = useAppDispatch()

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
    <div id="app-navbar" className={cn(cls.navbar, className)}>
      <div className={cls.wrapper}>
        {isUserLoggedOut && !isUserLoading && (
          <Button onClick={openAuthModal} ref={loginBtnRef} variant="outlined" size="sm">
            {t('login')}
          </Button>
        )}
        {(isUserLoggedIn || isUserLoading) && (
          <Button
            onClick={logOut}
            disabled={isUserAuthenticating && isUserLoading}
            variant="outlined"
            size="sm"
          >
            {t('logout')}
          </Button>
        )}
      </div>

      <AuthModal isOpen={showAuthModal} onClose={closeAuthModal} />
    </div>
  )
})
