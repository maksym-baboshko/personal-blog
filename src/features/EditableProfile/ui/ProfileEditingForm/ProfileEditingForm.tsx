import { useTranslation } from 'react-i18next'
import { useFormContext } from 'react-hook-form'

import { Input } from '@shared/ui/Input'
import { GenderSelect } from '@entities/Gender'
import { DropzoneField } from '@shared/ui/DropzoneField'
import { AvatarUploadArea } from '@features/AvatarUploading'

import { profileFields } from '../../model'

import { type ProfileEditingFormFC } from './ProfileEditingForm.types'

import cls from './ProfileEditingForm.module.scss'

export const ProfileEditingForm: ProfileEditingFormFC = () => {
  const { register, formState, control } = useFormContext()
  const { t } = useTranslation('profile')

  return (
    <>
      <form className={cls['profile-form']}>
        <DropzoneField name="avatar" control={control}>
          {AvatarUploadArea}
        </DropzoneField>

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
            <div key={name} className={cls['profile-field']}>
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

        <div className={cls['profile-field']}>
          <GenderSelect {...register('gender')} />
        </div>
      </form>
    </>
  )
}
