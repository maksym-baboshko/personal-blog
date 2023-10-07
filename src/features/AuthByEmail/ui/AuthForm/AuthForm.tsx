import { useState } from 'react'

import { useTranslation } from 'react-i18next'

import { Input } from '@shared/ui/Input'
import { Button } from '@shared/ui/Button'

import { type AuthFormFC } from './AuthForm.types'

import cls from './AuthForm.module.scss'

export const AuthForm: AuthFormFC = (props) => {
  const [value, setValue] = useState('')
  const { t } = useTranslation('common')

  const onInputChange = (value: string): void => {
    setValue(value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
  }

  return (
    <form className={cls.form} onSubmit={handleSubmit}>
      <h2 className={cls.title}>{t('auth_form.login.title')}</h2>

      <div className={cls['input-field']}>
        <label htmlFor="email" hidden className={cls.label}>
          {t('auth_form.email')}
        </label>

        <Input
          onChange={onInputChange}
          value={value}
          id="email"
          type="email"
          autoComplete="email"
          className={cls.input}
          autoFocus
          placeholder={t('auth_form.email')}
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
        />
      </div>

      <Button className={cls['submit-btn']} type="submit" variant="solid" size="md">
        {t('auth_form.submit')}
      </Button>
    </form>
  )
}
