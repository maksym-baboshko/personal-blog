import { memo, useCallback } from 'react'

import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { Button } from '@shared/ui/Button'
import { userActions } from '@entities/User'
import { useAuthState } from '@shared/hooks/common'
import { AuthModal } from '@features/Authentication'
import { useAppDispatch } from '@shared/hooks/store'
import { LanguageSwitcher } from '@features/LanguageSwitcher'

import { useAuthModal } from '../lib'

import { type NavbarFC } from './Navbar.types'

import cls from './Navbar.module.scss'

export const Navbar: NavbarFC = memo(function Navbar({ className }) {
  const { isAuthModalOpen, loginBtnRef, openAuthModal, closeAuthModal } = useAuthModal()
  const { isUserLoggedIn, isUserLoggedOut, isUserAuthenticating } = useAuthState()
  const { t } = useTranslation('common')
  const dispatch = useAppDispatch()

  const logOut = useCallback(() => {
    dispatch(userActions.logOut())
  }, [dispatch])

  return (
    <div id="navbar" className={cn(cls.navbar, className)}>
      <div className={cls.wrapper}>
        {isUserLoggedOut && !isUserAuthenticating && (
          <div className={cls.actions}>
            <LanguageSwitcher size="sm" className={cls['lang-switcher']} />
            <Button onClick={openAuthModal} ref={loginBtnRef} variant="outlined" size="sm">
              {t('login')}
            </Button>
          </div>
        )}

        {(isUserLoggedIn || isUserAuthenticating) && (
          <Button
            onClick={logOut}
            disabled={isUserAuthenticating && isUserAuthenticating}
            variant="outlined"
            size="sm"
          >
            {t('logout')}
          </Button>
        )}
      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </div>
  )
})
