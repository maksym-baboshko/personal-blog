import { useEffect } from 'react'

import { userActions } from '@entities/User'
import { useGetUserQuery } from '@shared/api/user'
import { useAuthState } from '@shared/hooks/common'
import { useAppDispatch } from '@shared/hooks/store'
import { DEFAULT_REFETCH_INTERVAL } from '@shared/constants/common'

export const useLoadUser = () => {
  const dispatch = useAppDispatch()
  const { userId, isUserLoggedOut } = useAuthState()

  const { data, isLoading, isError } = useGetUserQuery(userId, {
    skip: isUserLoggedOut,
    pollingInterval: DEFAULT_REFETCH_INTERVAL
  })

  useEffect(() => {
    if (!isError) return

    // If there is any other error except 401
    dispatch(userActions.logOut())
  }, [dispatch, isError])

  useEffect(() => {
    if (!data) return

    dispatch(userActions.updateData(data))
  }, [dispatch, data])

  return { isLoading }
}
