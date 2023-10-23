import { useMemo } from 'react'

import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { selectUserData } from '@entities/User'
import { useGetUserQuery } from '@shared/api/user'
import { useAppSelector } from '@shared/hooks/store'
import { getErrorMessage, isFetchBaseQueryError } from '@shared/lib/api'

export const useProfileData = () => {
  const { t } = useTranslation('profile')

  const { id } = useParams()
  const currentUserId = Number(id)

  const authenticatedUser = useAppSelector(selectUserData)
  const authenticatedUserId = authenticatedUser?.id
  const isAuthenticatedUser = currentUserId === authenticatedUserId

  const {
    data: currentUser = null,
    error: currentUserError,
    isLoading: isCurrentUserLoading
  } = useGetUserQuery(currentUserId, { skip: isAuthenticatedUser })

  const errorMsg = useMemo(() => {
    if (isFetchBaseQueryError(currentUserError) && currentUserError.status === 404) {
      return t('loading_error_profile_not_found')
    } else {
      return getErrorMessage(currentUserError)
    }
  }, [t, currentUserError])

  return {
    user: isAuthenticatedUser ? authenticatedUser : currentUser,
    error: errorMsg,
    isLoading: isCurrentUserLoading,
    readonly: !isAuthenticatedUser
  }
}
