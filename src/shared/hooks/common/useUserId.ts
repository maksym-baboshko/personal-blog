import { useMemo } from 'react'

import decodeJWT, { type JwtPayload } from 'jwt-decode'

import { LS_JWT_KEY } from '../../constants/localStorage'

export const useUserId = () => {
  const jwt = localStorage.getItem(LS_JWT_KEY)

  return useMemo(() => {
    if (!jwt) return

    const parsedJWT = decodeJWT<JwtPayload>(jwt)
    return parsedJWT?.sub ? Number(parsedJWT.sub) : undefined
  }, [jwt])
}
