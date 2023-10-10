import { Modal } from '@shared/ui/Modal'

import { AuthForm } from '../AuthForm'

import { type AuthModalFC } from './AuthModal.types'

export const AuthModal: AuthModalFC = (props) => {
  return (
    <Modal {...props}>
      <AuthForm />
    </Modal>
  )
}
