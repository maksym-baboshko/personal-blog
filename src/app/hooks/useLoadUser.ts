import { useEffect } from 'react'

import { useUserId } from '@shared/hooks/common'
import { useGetUserQuery } from '@shared/api/user'
import { DEFAULT_REFETCH_INTERVAL } from '@shared/constants/common'
import { useAppDispatch, useAppSelector } from '@shared/hooks/store'
import { selectAuthenticationStatus, userActions } from '@entities/User'

export const useLoadUser = () => {
  const dispatch = useAppDispatch()
  const userId = useUserId()

  const isUserLoggedOut = !useAppSelector(selectAuthenticationStatus) && !userId

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
