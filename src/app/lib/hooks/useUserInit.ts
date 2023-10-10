import { useEffect } from 'react'

import { useTypedDispatch, useTypedSelector } from '@shared/hooks'
import { getUserAuthStatus, initUserProfile } from '@entities/User'

export const useUserInit = (): void => {
  const isUserAuthorized = useTypedSelector(getUserAuthStatus)
  const dispatch = useTypedDispatch()

  useEffect(() => {
    if (!isUserAuthorized) {
      void dispatch(initUserProfile())
    }
  }, [dispatch, isUserAuthorized])
}
