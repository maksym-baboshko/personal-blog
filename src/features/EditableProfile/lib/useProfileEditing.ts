import { useCallback, useState } from 'react'

import { useForm } from 'react-hook-form'

import { type User } from '@shared/types/user'
import { useUpdateUserMutation } from '@shared/api/user'

export const useProfileEditing = (user: Partial<User>) => {
  const [updateUser, { isLoading: isSaving, error: savingError }] = useUpdateUserMutation()
  const formMethods = useForm<Partial<User>>({ values: user })
  const [isEditing, setIsEditing] = useState(false)

  const onSave = useCallback(
    async (data: Partial<User>) => {
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
