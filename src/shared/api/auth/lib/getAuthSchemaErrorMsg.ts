import { getSchemaErrorMsg } from '@shared/lib/common'

export const getAuthSchemaErrorMsg = (errorMsg: string) => {
  return getSchemaErrorMsg('AuthResponseSchema', errorMsg)
}
