import { type tSelector } from '@shared/types/store'

export const getUserAuthStatus: tSelector<boolean> = (state) => state.user.isAuthenticated
