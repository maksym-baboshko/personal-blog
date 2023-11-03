import { useEffect } from 'react'

import { userActions } from '@entities/User'
import { useGetUserQuery } from '@shared/api/user'
import { useAuthState } from '@shared/hooks/common'
import { useAppDispatch } from '@shared/hooks/store'
import { DEFAULT_REFETCH_INTERVAL } from '@shared/constants/common'

export const useLoadUser = () => {
  const dispatch = useAppDispatch()
  const { userId, isUserLoggedOut } = useAuthState()

  const { data, isLoading } = useGetUserQuery(userId, {
    skip: isUserLoggedOut,
    pollingInterval: DEFAULT_REFETCH_INTERVAL
  })

  useEffect(() => {
    if (!data) return

    dispatch(userActions.updateData(data))
  }, [dispatch, data])

  return { isLoading }
}
