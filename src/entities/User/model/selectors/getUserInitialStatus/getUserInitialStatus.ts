import { type tRequestStatus, type tSelector } from '@shared/types'

export const getUserInitialStatus: tSelector<tRequestStatus> = (state) => {
  return state.user.initializationStatus
}
