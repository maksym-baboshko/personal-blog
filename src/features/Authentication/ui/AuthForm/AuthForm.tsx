import { memo, useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'

import { Text } from '@shared/ui/Text'
import { Input } from '@shared/ui/Input'
import { Button } from '@shared/ui/Button'
import { useAuthForm, useSignIn } from '@features/Authentication/lib'

import { type AuthFormFC } from './AuthForm.types'

import cls from './AuthForm.module.scss'

const AuthForm: AuthFormFC = memo(function AuthForm({ onSuccess, isModalClosing }) {
  const { register, handleSubmit, getFieldValidationMessage, formState } = useAuthForm()
  const { loginHandler, isSigninIn, authErrMsg } = useSignIn(onSuccess)
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const { t } = useTranslation('common')

  useEffect(() => {
    if (isSigninIn || isModalClosing) {
      setIsAuthenticating(true)
    }

    return () => {
      setIsAuthenticating(false)
    }
  }, [isSigninIn, isModalClosing])

  return (
    <form className={cls.form} onSubmit={handleSubmit(loginHandler)}>
      <Text className={cls.title} heading={t('auth_form.login.title')} textAlign="center" />

      <div className={cls['input-field']}>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          autoFocus
          className={cls.input}
          isInvalid={Boolean(formState.errors.email)}
          errorMessage={getFieldValidationMessage('email')}
          label={t('auth_form.email.label')}
          placeholder={t('auth_form.email.placeholder')}
          {...register('email')}
        />
      </div>

      <div className={cls['input-field']}>
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          className={cls.input}
          isInvalid={Boolean(formState.errors.password)}
          errorMessage={getFieldValidationMessage('password')}
          label={t('auth_form.password.label')}
          placeholder={t('auth_form.password.placeholder')}
          {...register('password')}
        />
      </div>

      {authErrMsg && <Text color="danger" text={authErrMsg} className={cls.error} />}

      <Button
        className={cls['submit-btn']}
        type="submit"
        variant="solid"
        size="md"
        loading={isAuthenticating}
      >
        {t('auth_form.submit')}
      </Button>
    </form>
  )
})

export default AuthForm
