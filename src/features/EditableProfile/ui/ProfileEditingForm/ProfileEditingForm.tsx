import { useMemo } from 'react'

import { useTranslation } from 'react-i18next'
import { useFormContext } from 'react-hook-form'

import { Input } from '@shared/ui/Input'
import { Avatar } from '@shared/ui/Avatar'
import { Select } from '@shared/ui/Select'
import { type UserGender } from '@shared/types/user'

import { profileFields } from '../../model'

import { type ProfileEditingFormFC } from './ProfileEditingForm.types'

import cls from './ProfileEditingForm.module.scss'

export const ProfileEditingForm: ProfileEditingFormFC = (user) => {
  const { t } = useTranslation('profile')
  const { register } = useFormContext()

  const options = useMemo((): Array<{ value: UserGender; label: string }> => {
    return [
      { value: 'male', label: t('sex.male') },
      { value: 'female', label: t('sex.female') }
    ]
  }, [t])

  return (
    <form className={cls['profile-form']}>
      <Avatar src={user.avatar} className={cls.avatar} size="lg" />

      <div className={cls['info-fields']}>
        {profileFields.map((field) => {
          const { name, inputId, labelKey, type, autoComplete } = field

          const isInput = ['text', 'number'].includes(type)
          const isSelect = type === 'select'

          let isRequired = false
          let valueAsNumber = false

          switch (name) {
            case 'fname':
            case 'lname':
              isRequired = true
          }

          switch (name) {
            case 'age':
              valueAsNumber = true
          }

          return (
            <div key={name} className={cls['input-field']}>
              <label htmlFor={inputId} hidden className={cls.label}>
                {t(labelKey)}:&nbsp;
              </label>

              {isSelect && (
                <Select
                  id={inputId}
                  options={options}
                  placeholder={t(labelKey)}
                  autoComplete={autoComplete}
                  fullWidth
                  {...register(name, {
                    required: isRequired,
                    valueAsNumber,
                    setValueAs: (v) => (v === '' ? null : v)
                  })}
                />
              )}

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
      </div>
    </form>
  )
}
