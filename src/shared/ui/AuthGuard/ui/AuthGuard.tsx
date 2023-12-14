import { type FC, memo } from 'react'

import { Navigate } from 'react-router-dom'

import { useAuthGuard } from '@shared/hooks/common'

interface AuthGuardProps {
  children: JSX.Element
}

export const AuthGuard: FC<AuthGuardProps> = memo(function AuthGuard({ children }) {
  const { isAccessDenied, location, root } = useAuthGuard()

  return isAccessDenied ? <Navigate to={root} state={{ from: location }} replace /> : children
})
