import { useLocation } from 'react-router-dom'

import { getRootRoute } from '@shared/constants/router'

import { useAuthState } from './useAuthState'

export const useAuthGuard = () => {
  let isAccessDenied = false
  const root = getRootRoute()
  const location = useLocation()

  const from = location.state?.from?.pathname ?? root
  const { isUserAuthenticating, isUserLoggedIn } = useAuthState()

  if (!isUserLoggedIn && !isUserAuthenticating) isAccessDenied = true

  return { isAccessDenied, isAccessAllowed: !isAccessDenied, location, from, root }
}
