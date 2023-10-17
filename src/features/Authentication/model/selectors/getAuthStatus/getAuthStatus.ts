import { type tRequestStatus, type tSelector } from '@shared/types/store'

export const getAuthStatus: tSelector<tRequestStatus | undefined> = (state) => state.auth?.status
