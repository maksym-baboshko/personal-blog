import { Suspense } from 'react'

import { Modal } from '@shared/ui/Modal'
import { Loader } from '@shared/ui/Loader'

import { AuthForm } from '../AuthForm'

import { type AuthModalFC } from './AuthModal.types'

import cls from './AuthModal.module.scss'

export const AuthModal: AuthModalFC = (props) => {
  return (
    <Modal contentClassName={cls.content} {...props}>
      <Suspense fallback={<Loader />}>
        <AuthForm />
      </Suspense>
    </Modal>
  )
}
