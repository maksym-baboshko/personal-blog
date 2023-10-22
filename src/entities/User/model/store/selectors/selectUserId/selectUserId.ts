import { type tSelector } from '@shared/types/store'

export const selectUserId: tSelector<number | undefined> = (state) => state.user.data?.id
