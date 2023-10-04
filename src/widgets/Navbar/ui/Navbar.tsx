import { useCallback, useState } from 'react'

import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { Modal } from '@shared/ui/Modal'
import { Button } from '@shared/ui/Button'

import { type NavbarFC } from './Navbar.types'

import cls from './Navbar.module.scss'

export const Navbar: NavbarFC = ({ className }) => {
  const [hasAuthModal, setHasAuthModal] = useState(false)
  const { t } = useTranslation('common')

  const toggleAuthModal = useCallback(() => {
    setHasAuthModal((hasAuthModal) => !hasAuthModal)
  }, [])

  return (
    <div className={cn(cls.navbar, className)}>
      <div className={cls.links}>
        <Button onClick={toggleAuthModal} variant="outlined" size="sm">
          {t('login')}
        </Button>

        <Modal isOpen={hasAuthModal} onClose={toggleAuthModal}>
          {
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex cum beatae libero at. Quos, magnam maiores praesentium sit cum mollitia.'
          }
        </Modal>
      </div>
    </div>
  )
}
