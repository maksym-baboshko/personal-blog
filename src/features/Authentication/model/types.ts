import { type Output } from 'valibot'

import { type AuthCredentialsSchema } from './schemas'

export type tAuthCredentials = Output<typeof AuthCredentialsSchema>
