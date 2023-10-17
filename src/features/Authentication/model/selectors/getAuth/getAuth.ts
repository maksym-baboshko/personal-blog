import { type tSelector } from '@shared/types/store'

import { type AuthSchema } from '../../types'

export const getAuth: tSelector<AuthSchema | undefined> = (state) => state.auth
