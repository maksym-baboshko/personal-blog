import { type tSelector } from '@shared/types'

import { type AuthSchema } from '../../types'

export const getAuth: tSelector<AuthSchema | undefined> = (state) => state.auth
