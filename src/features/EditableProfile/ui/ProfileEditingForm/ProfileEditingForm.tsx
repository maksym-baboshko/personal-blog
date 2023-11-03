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

  const { register, formState } = useFormContext()

  return (
    <form className={cls['profile-form']}>
      <Avatar src={user.avatar} className={cls.avatar} size="lg" />

      <div className={cls['info-fields']}>
        {profileFields.map((field) => {
          const { name, inputId, labelKey, placeholderKey, type, autoComplete } = field

          const label = t(labelKey)
          const placeholder = t(placeholderKey)
          const isInvalid = Boolean(formState.errors[name])
          const errorMessageKey = formState.errors[name]?.message?.toString()
          const errorMessage = errorMessageKey && t(errorMessageKey)

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
              <Input
                id={inputId}
                type={type}
                label={label}
                isInvalid={isInvalid}
                aria-invalid={isInvalid}
                errorMessage={errorMessage}
                placeholder={placeholder}
                autoComplete={autoComplete}
                fullWidth
                {...register(name, { required: isRequired, valueAsNumber })}
              />
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
