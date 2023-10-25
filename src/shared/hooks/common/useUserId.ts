import { useMemo } from 'react'

import decodeJWT, { type JwtPayload } from 'jwt-decode'

import { selectUserToken } from '@entities/User'

import { useAppSelector } from '../store'

export const useUserId = () => {
  const token = useAppSelector(selectUserToken)

  const userId = useMemo(() => {
    if (!token) return

    const parsedJWT = decodeJWT<JwtPayload>(token)
    return parsedJWT?.sub ? Number(parsedJWT.sub) : undefined
  }, [token])

  return { userId, token }
}
