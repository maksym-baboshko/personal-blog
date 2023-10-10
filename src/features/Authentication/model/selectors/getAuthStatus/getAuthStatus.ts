import { type tRequestStatus, type tSelector } from '@shared/types'

export const getAuthStatus: tSelector<tRequestStatus | undefined> = (state) => state.auth?.status
