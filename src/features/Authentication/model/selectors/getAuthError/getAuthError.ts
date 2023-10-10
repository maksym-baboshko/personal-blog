import { type tSelector } from '@shared/types'

export const getAuthError: tSelector<string | null> = (state) => state.auth?.error ?? null
