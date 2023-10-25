import { useTranslation } from 'react-i18next'
import { useFormContext } from 'react-hook-form'

import { Input } from '@shared/ui/Input'
import { Avatar } from '@shared/ui/Avatar'

import { profileFields } from '../../model'

import { type ProfileEditingFormFC } from './ProfileEditingForm.types'

import cls from './ProfileEditingForm.module.scss'

export const ProfileEditingForm: ProfileEditingFormFC = (user) => {
  const { t } = useTranslation('profile')
  const { register } = useFormContext()

  return (
    <form className={cls['profile-form']}>
      <Avatar src={user.avatar} className={cls.avatar} size="lg" />

      <div className={cls['info-fields']}>
        {profileFields.map((field) => {
          const { value, inputId, labelKey, type, autoComplete } = field

          let isRequired = false
          let valueAsNumber = false

          switch (value) {
            case 'fname':
            case 'lname':
              isRequired = true
          }

          switch (value) {
            case 'age':
              valueAsNumber = true
          }

          return (
            <div key={value} className={cls['input-field']}>
              <label htmlFor={inputId} hidden className={cls.label}>
                {t(labelKey)}:&nbsp;
              </label>

              <Input
                id={inputId}
                type={type}
                className={cls.input}
                placeholder={t(labelKey)}
                autoComplete={autoComplete}
                fullWidth
                {...register(value, { required: isRequired, valueAsNumber })}
              />
            </div>
          )
        })}
      </div>
    </form>
  )
}
