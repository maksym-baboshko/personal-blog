import { memo } from 'react'

import { FormProvider } from 'react-hook-form'

import { useProfileEditing } from '../../lib'
import { ProfileHeader } from '../ProfileHeader'
import { ProfileViewCard } from '../ProfileViewCard'
import { ProfileEditingForm } from '../ProfileEditingForm'

import { type EditableProfileFC } from './EditableProfile.types'

import cls from './EditableProfile.module.scss'

export const EditableProfile: EditableProfileFC = memo(function ProfileEditing(props) {
  const { readonly, ...user } = props

  const { formMethods, isEditing, onEditing, onCancelEditing, onSave } = useProfileEditing(user)

  return (
    <FormProvider {...formMethods}>
      <div className={cls.wrapper}>
        <div className={cls.profile}>
          <ProfileHeader
            readonly={readonly}
            isEditing={isEditing}
            username={user.username}
            onEditing={onEditing}
            onCancelEditing={onCancelEditing}
            onSave={formMethods.handleSubmit(onSave)}
          />

          {!readonly && isEditing && <ProfileEditingForm {...user} />}
          {(readonly || !isEditing) && <ProfileViewCard {...user} />}
        </div>
      </div>
    </FormProvider>
  )
})
