import { type tRequestStatus, type tSelector } from '@shared/types/store'

export const getUserInitialStatus: tSelector<tRequestStatus> = (state) => {
  return state.user.initializationStatus
}
