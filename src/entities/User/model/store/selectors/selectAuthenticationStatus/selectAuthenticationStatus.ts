import { type tSelector } from '@shared/types/store'

export const selectAuthenticationStatus: tSelector<boolean> = (state) => state.user.isAuthenticated
