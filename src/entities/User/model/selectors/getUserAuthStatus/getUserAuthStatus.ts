import { type tSelector } from '@shared/types'

export const getUserAuthStatus: tSelector<boolean> = (state) => state.user.isAuthorized
