import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { Text } from '@shared/ui/Text'
import { Input } from '@shared/ui/Input'
import { Button } from '@shared/ui/Button'
import { getUserProfile } from '@entities/User'
import { useAppSelector } from '@shared/hooks/store'

import { Avatar } from '../Avatar'

import { type ProfileFC } from './Profile.types'

import cls from './Profile.module.scss'

export const Profile: ProfileFC = () => {
  const user = useAppSelector(getUserProfile)
  const readonly = false

  const { t } = useTranslation('profile')

  return (
    <div className={cn(cls.wrapper, { [cls.readonly]: readonly })}>
      <div className={cls.card}>
        <div className={cls.header}>
          <Text className={cls.title} heading={t('title')} />
          <Button variant="solid" size="sm">
            {t('edit')}
          </Button>
        </div>

        <form className={cls.form}>
          <Avatar avatar={user?.avatar} />

          <div className={cls.info}>
            <div className={cls['input-field']}>
              <label htmlFor="first-name" hidden className={cls.label}>
                {t('fields.first_name')}
              </label>

              <Input
                id="first-name"
                type="text"
                value={user?.fname ?? ''}
                onChange={() => {}}
                disabled={readonly}
                className={cls.input}
                placeholder={t('fields.first_name')}
                autoComplete="given-name"
                fullWidth
              />
            </div>

            <div className={cls['input-field']}>
              <label htmlFor="last-name" hidden className={cls.label}>
                {t('fields.last_name')}
              </label>

              <Input
                id="last-name"
                type="text"
                value={user?.lname ?? ''}
                onChange={() => {}}
                disabled={readonly}
                className={cls.input}
                placeholder={t('fields.last_name')}
                autoComplete="family-name"
                fullWidth
              />
            </div>

            <div className={cls['input-field']}>
              <label htmlFor="age" hidden className={cls.label}>
                {t('fields.age')}
              </label>

              <Input
                id="age"
                type="text"
                value={user?.age ?? ''}
                onChange={() => {}}
                disabled={readonly}
                className={cls.input}
                placeholder={t('fields.age')}
                fullWidth
              />
            </div>

            <div className={cls['input-field']}>
              <label htmlFor="gender" hidden className={cls.label}>
                {t('fields.gender')}
              </label>

              <Input
                id="gender"
                type="text"
                value={user?.gender ? t(`sex.${user?.gender}`) : ''}
                onChange={() => {}}
                disabled={readonly}
                className={cls.input}
                placeholder={t('fields.gender')}
                autoComplete="sex"
                fullWidth
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
