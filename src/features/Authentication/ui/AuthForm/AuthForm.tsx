import { memo, useCallback } from 'react'

import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { valibotResolver } from '@hookform/resolvers/valibot'

import { Text } from '@shared/ui/Text'
import { Input } from '@shared/ui/Input'
import { Button } from '@shared/ui/Button'
import { useLogin } from '@features/Authentication/lib'

import { type tAuthCredentials } from '../../model/types'
import { AuthCredentialsSchema } from '../../model/schemas'

import { type AuthFormFC } from './AuthForm.types'

import cls from './AuthForm.module.scss'

const AuthForm: AuthFormFC = memo(function AuthForm({ onSuccess }) {
  const { loginHandler, isAuthenticating, authErrMsg } = useLogin(onSuccess)
  const { register, handleSubmit, formState } = useForm<tAuthCredentials>({
    resolver: valibotResolver(AuthCredentialsSchema)
  })

  const { t } = useTranslation('common')

  const getErrorMessage = useCallback(
    (fieldName: keyof tAuthCredentials) => {
      const errorMessageKey = formState.errors[fieldName]?.message
      return errorMessageKey && t(errorMessageKey)
    },
    [formState.errors, t]
  )

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
          errorMessage={getErrorMessage('email')}
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
          errorMessage={getErrorMessage('password')}
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
        disabled={isAuthenticating}
      >
        {t('auth_form.submit')}
      </Button>
    </form>
  )
})

export default AuthForm
