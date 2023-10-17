import { useEffect } from 'react'

import { getUserAuthStatus, initUserProfile } from '@entities/User'
import { useAppDispatch, useAppSelector } from '@shared/hooks/store'

export const useLoadUser = (): void => {
  const isUserAuthorized = useAppSelector(getUserAuthStatus)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isUserAuthorized) {
      void dispatch(initUserProfile())
    }
  }, [dispatch, isUserAuthorized])
}
