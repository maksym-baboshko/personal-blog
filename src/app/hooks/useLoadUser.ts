import { useEffect } from 'react'

import { userActions } from '@entities/User'
import { useUserId } from '@shared/hooks/common'
import { useAppDispatch } from '@shared/hooks/store'
import { useGetAuthenticatedUserQuery } from '@shared/api/user'
import { DEFAULT_REFETCH_INTERVAL } from '@shared/constants/common'

export const useLoadUser = () => {
  const dispatch = useAppDispatch()
  const userId = useUserId()

  const { data, isLoading } = useGetAuthenticatedUserQuery(userId, {
    skip: !userId,
    pollingInterval: DEFAULT_REFETCH_INTERVAL
  })

  useEffect(() => {
    if (!data) return

    dispatch(userActions.setUser(data))
  }, [dispatch, data])

  return { isLoading }
}
