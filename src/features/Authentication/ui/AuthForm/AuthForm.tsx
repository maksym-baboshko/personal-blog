import { memo } from 'react'

import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Text } from '@shared/ui/Text'
import { Input } from '@shared/ui/Input'
import { Button } from '@shared/ui/Button'
import { type tUserCredentials } from '@entities/User'
import { useLogin } from '@features/Authentication/lib'

import { type AuthFormFC } from './AuthForm.types'

import cls from './AuthForm.module.scss'

const AuthForm: AuthFormFC = memo(function AuthForm({ onSuccess }) {
  const { loginHandler, isAuthenticating, authErrMsg } = useLogin(onSuccess)
  const { register, handleSubmit } = useForm<tUserCredentials>()
  const { t } = useTranslation('common')

  return (
    <form className={cls.form} onSubmit={handleSubmit(loginHandler)}>
      <h2 className={cls.title}>{t('auth_form.login.title')}</h2>

      <div className={cls['input-field']}>
        <label htmlFor="email" hidden className={cls.label}>
          {t('auth_form.email')}
        </label>

        <Input
          id="email"
          type="email"
          autoComplete="email"
          autoFocus
          className={cls.input}
          placeholder={t('auth_form.email')}
          {...register('email', { required: true })}
        />
      </div>

      <div className={cls['input-field']}>
        <label htmlFor="password" hidden className={cls.label}>
          {t('auth_form.password')}
        </label>

        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          className={cls.input}
          placeholder={t('auth_form.password')}
          {...register('password', { required: true })}
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
