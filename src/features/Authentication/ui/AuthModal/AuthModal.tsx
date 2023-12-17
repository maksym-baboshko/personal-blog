import { Suspense } from 'react'

import { Modal } from '@shared/ui/Modal'
import { Loader } from '@shared/ui/Loader'
import { useCloseModalRemotely } from '@shared/hooks/ui'

import { AuthForm } from '../AuthForm'

import { type AuthModalFC } from './AuthModal.types'

import cls from './AuthModal.module.scss'

export const AuthModal: AuthModalFC = (props) => {
  const { isClosing, onClose } = useCloseModalRemotely(props.onClose)

  return (
    <Modal contentClassName={cls.content} isClosingRemotely={isClosing} {...props}>
      <Suspense fallback={<Loader />}>
        <AuthForm onSuccess={onClose} isModalClosing={isClosing} />
      </Suspense>
    </Modal>
  )
}
