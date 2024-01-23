import { useCallback, useMemo, useState } from 'react'

import { useForm } from 'react-hook-form'
import { valibotResolver } from '@hookform/resolvers/valibot'

import { UserFormSchema, type tUser } from '@entities/User'
import { useUpdateUserMutation, useUploadAvatarMutation } from '@shared/api/user'

export const useProfileEditing = (user: Partial<tUser>) => {
  const [uploadAvatar, { isLoading: isAvatarUploading }] = useUploadAvatarMutation()
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation()
  const [isAvatarChanged, setIsAvatarChanged] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const isAvatarUpdating = (isUpdating || isAvatarUploading) && isAvatarChanged
  const isSaving = isUpdating || isAvatarUploading

  const transformedUser = useMemo(() => {
    return {
      ...user,
      avatar: user.avatar ? { url: user.avatar, file: null } : null
    }
  }, [user])

  const formMethods = useForm<Partial<typeof transformedUser>>({
    values: transformedUser,
    resolver: valibotResolver(UserFormSchema)
  })

  const onSave = useCallback(
    async (data: Partial<typeof transformedUser>) => {
      const isUserUpdated = JSON.stringify(data) !== JSON.stringify(transformedUser)

      setIsEditing(false)

      if (!isUserUpdated || __PROJECT__ === 'storybook') return

      try {
        let avatar = data.avatar?.url

        if (data.avatar?.file) {
          const formData = new FormData()

          formData.append('avatar', data.avatar.file)
          setIsAvatarChanged(true)

          avatar = (await uploadAvatar(formData).unwrap()).avatarUrl
        }

        await updateUser({ ...data, avatar }).unwrap()
      } catch {
        formMethods.reset(transformedUser)
      } finally {
        setIsAvatarChanged(false)
      }
    },
    [transformedUser, formMethods, updateUser, uploadAvatar]
  )

  const onCancelEditing = useCallback(() => {
    formMethods.reset(transformedUser)
    setIsEditing(false)
  }, [formMethods, transformedUser])

  const onEditing = useCallback(() => {
    setIsEditing(true)
  }, [])

  return { isEditing, isSaving, isAvatarUpdating, formMethods, onEditing, onCancelEditing, onSave }
}
