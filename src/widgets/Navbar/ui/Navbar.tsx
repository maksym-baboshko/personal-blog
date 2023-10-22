import { memo, useCallback, useRef, useState } from 'react'

import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { Button } from '@shared/ui/Button'
import { useUserId } from '@shared/hooks/common'
import { AuthModal } from '@features/Authentication'
import { useAppDispatch, useAppSelector } from '@shared/hooks/store'
import { useGetAuthenticatedUserQueryState } from '@shared/api/user'
import { userActions, selectAuthenticationStatus } from '@entities/User'

import { type NavbarFC } from './Navbar.types'

import cls from './Navbar.module.scss'

export const Navbar: NavbarFC = memo(function Navbar({ className }) {
  const userId = useUserId()

  const isUserAuthenticated = useAppSelector(selectAuthenticationStatus)
  const { isLoading: isUserLoading } = useGetAuthenticatedUserQueryState(userId)
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
    <div className={cn(cls.navbar, className)}>
      <div className={cls.wrapper}>
        {!isUserAuthenticated && !isUserLoading && (
          <Button onClick={openAuthModal} ref={loginBtnRef} variant="outlined" size="sm">
            {t('login')}
          </Button>
        )}
        {(isUserAuthenticated || isUserLoading) && (
          <Button
            onClick={logOut}
            disabled={!isUserAuthenticated && isUserLoading}
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
