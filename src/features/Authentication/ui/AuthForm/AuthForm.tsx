import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import { useForm, type SubmitHandler } from 'react-hook-form'

import { Text } from '@shared/ui/Text'
import { Input } from '@shared/ui/Input'
import { Button } from '@shared/ui/Button'
import { useTypedDispatch, useTypedSelector } from '@shared/hooks'

import { authActions } from '../../model/slice'
import { authByEmail } from '../../model/services'
import { type UserCredentials } from '../../model/types'
import { getAuthError, getAuthStatus } from '../../model/selectors'

import { type AuthFormFC } from './AuthForm.types'

import cls from './AuthForm.module.scss'

export const AuthForm: AuthFormFC = memo(function AuthForm() {
  const { register, handleSubmit } = useForm<UserCredentials>()

  const authStatus = useTypedSelector(getAuthStatus)
  const authError = useTypedSelector(getAuthError)
  const dispatch = useTypedDispatch()

  const { t } = useTranslation('common')

  const submitHandler: SubmitHandler<UserCredentials> = async (data) => {
    await dispatch(authByEmail(data))
  }

  useEffect(() => {
    return () => {
      if (authStatus === 'error') {
        dispatch(authActions.reset())
      }
    }
  }, [dispatch, authStatus])

  return (
    <form className={cls.form} onSubmit={handleSubmit(submitHandler)}>
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

      {authError && <Text color="danger" text={authError} className={cls.error} />}

      <Button
        className={cls['submit-btn']}
        type="submit"
        variant="solid"
        size="md"
        disabled={authStatus === 'loading'}
      >
        {t('auth_form.submit')}
      </Button>
    </form>
  )
})
