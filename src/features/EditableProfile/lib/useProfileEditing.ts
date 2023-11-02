import { useCallback, useState } from 'react'

import { useForm } from 'react-hook-form'
import { valibotResolver } from '@hookform/resolvers/valibot'

import { UserSchema, type tUser } from '@entities/User'
import { useUpdateUserMutation } from '@shared/api/user'

export const useProfileEditing = (user: Partial<tUser>) => {
  const [updateUser, { isLoading: isSaving, error: savingError }] = useUpdateUserMutation()
  const [isEditing, setIsEditing] = useState(false)

  const formMethods = useForm<Partial<tUser>>({
    values: user,
    resolver: valibotResolver(UserSchema)
  })

  const onSave = useCallback(
    async (data: Partial<tUser>) => {
      const isUserUpdated = JSON.stringify(data) !== JSON.stringify(user)

      setIsEditing(false)

      if (!isUserUpdated) return

      try {
        await updateUser(data).unwrap()
      } catch {
        formMethods.reset(user)
      }
    },
    [user, formMethods, updateUser]
  )

  const onCancelEditing = useCallback(() => {
    formMethods.reset(user)
    setIsEditing(false)
  }, [formMethods, user])

  const onEditing = useCallback(() => {
    setIsEditing(true)
  }, [])

  return { isEditing, isSaving, savingError, formMethods, onEditing, onCancelEditing, onSave }
}
