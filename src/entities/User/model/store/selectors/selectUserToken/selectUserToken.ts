import { type tSelector } from '@shared/types/store'

export const selectUserToken: tSelector<string | null> = (state) => state.user.token
