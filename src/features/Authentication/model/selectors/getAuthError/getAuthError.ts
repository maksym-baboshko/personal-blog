import { type tSelector } from '@shared/types/store'

export const getAuthError: tSelector<string | null> = (state) => state.auth?.error ?? null
