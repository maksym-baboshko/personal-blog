import { type Output, type Input } from 'valibot'

import { type AuthResponseSchema } from './schemas'

export type tAuthResponse = Output<typeof AuthResponseSchema>
export type tRawAuthResponse = Input<typeof AuthResponseSchema>
