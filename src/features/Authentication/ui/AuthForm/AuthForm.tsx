import { memo, useCallback, useMemo } from 'react'

import { useTranslation } from 'react-i18next'
import { useForm, type SubmitHandler } from 'react-hook-form'

import { Text } from '@shared/ui/Text'
import { Input } from '@shared/ui/Input'
import { Button } from '@shared/ui/Button'
import { userActions } from '@entities/User'
import { getErrorMessage } from '@shared/lib/api'
import { useAppDispatch } from '@shared/hooks/store'
import { useLoginMutation, type UserCredentials } from '@shared/api/auth'

import { type AuthFormFC } from './AuthForm.types'

import cls from './AuthForm.module.scss'

const AuthForm: AuthFormFC = memo(function AuthForm({ onSuccess }) {
  const { register, handleSubmit } = useForm<UserCredentials>()
  const [login, { isLoading, error }] = useLoginMutation()
  const { t } = useTranslation('common')
  const dispatch = useAppDispatch()

  const authErrMsg = useMemo(() => getErrorMessage(error), [error])

  const submitHandler: SubmitHandler<UserCredentials> = useCallback(
    async (credentials) => {
      const res = await login(credentials)

      if ('data' in res) {
        onSuccess && onSuccess()
        dispatch(userActions.authWithCredentials(res.data))
      }
    },
    [onSuccess, login, dispatch]
  )

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

      {authErrMsg && <Text color="danger" text={authErrMsg} className={cls.error} />}

      <Button
        className={cls['submit-btn']}
        type="submit"
        variant="solid"
        size="md"
        disabled={isLoading}
      >
        {t('auth_form.submit')}
      </Button>
    </form>
  )
})

export default AuthForm
