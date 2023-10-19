import { type User } from '@shared/api/user'
import { type tSelector } from '@shared/types/store'

export const selectUserData: tSelector<User | null> = (state) => state.user.data
