import { selectAuthenticationStatus } from '@entities/User'

import { useAppSelector } from '../store'

import { useUserId } from '.'

export const useAuthState = () => {
  const { userId, token } = useUserId()

  const isUserLoggedIn = useAppSelector(selectAuthenticationStatus) && !!token
  const isUserLoggedOut = !useAppSelector(selectAuthenticationStatus) && !token
  const isUserAuthenticating = !useAppSelector(selectAuthenticationStatus) && !!token

  return { isUserLoggedIn, isUserLoggedOut, isUserAuthenticating, userId, token }
}
