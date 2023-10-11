import { lazy } from 'react'

import { type AuthFormFC } from './AuthForm.types'

export const AuthFormAsync = lazy<AuthFormFC>(async () => await import('./AuthForm'))
