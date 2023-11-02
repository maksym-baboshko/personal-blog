import { selectAuthenticationStatus } from '@entities/User'

import { useAppSelector } from '../store'

import { useUserId } from '.'

export const useAuthState = () => {
  const { userId, token } = useUserId()
  const isUserAuthenticated = useAppSelector(selectAuthenticationStatus)

  const isUserLoggedIn = isUserAuthenticated && !!token
  const isUserLoggedOut = !isUserAuthenticated && !token
  const isUserAuthenticating = !isUserAuthenticated && !!token

  return { isUserLoggedIn, isUserLoggedOut, isUserAuthenticating, userId, token }
}
