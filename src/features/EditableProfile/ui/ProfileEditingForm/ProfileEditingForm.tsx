import { useTranslation } from 'react-i18next'
import { useFormContext } from 'react-hook-form'

import { Input } from '@shared/ui/Input'
import { Avatar } from '@shared/ui/Avatar'
import { GenderSelect } from '@entities/Gender'

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
          const { name, inputId, labelKey, type, autoComplete } = field

          const isInput = ['text', 'number'].includes(type)

          let isRequired = false
          let valueAsNumber = false

          switch (name) {
            case 'fname':
            case 'lname':
              isRequired = true
              break
            case 'age':
              valueAsNumber = true
              break
          }

          return (
            <div key={name} className={cls['input-field']}>
              <label htmlFor={inputId} hidden>
                {t(labelKey)}:&nbsp;
              </label>

              {isInput && (
                <Input
                  id={inputId}
                  type={type}
                  placeholder={t(labelKey)}
                  autoComplete={autoComplete}
                  fullWidth
                  {...register(name, { required: isRequired, valueAsNumber })}
                />
              )}
            </div>
          )
        })}

        <div className={cls['input-field']}>
          <GenderSelect {...register('gender')} />
        </div>
      </div>
    </form>
  )
}
