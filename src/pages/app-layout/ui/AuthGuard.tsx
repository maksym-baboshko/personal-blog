import { type FC, memo } from 'react'

import { Navigate } from 'react-router-dom'

import { useAuth } from '@shared/hooks/common'

interface AuthGuardProps {
  children: JSX.Element
}

export const AuthGuard: FC<AuthGuardProps> = memo(function AuthGuard({ children }) {
  const { isAccessDenied, location, root } = useAuth()

  return isAccessDenied ? <Navigate to={root} state={{ from: location }} replace /> : children
})
