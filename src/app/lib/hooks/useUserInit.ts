import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@shared/hooks'
import { getUserAuthStatus, initUserProfile } from '@entities/User'

export const useUserInit = (): void => {
  const isUserAuthorized = useAppSelector(getUserAuthStatus)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isUserAuthorized) {
      void dispatch(initUserProfile())
    }
  }, [dispatch, isUserAuthorized])
}
