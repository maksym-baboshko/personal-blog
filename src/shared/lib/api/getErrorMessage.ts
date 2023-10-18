import { isErrorWithMessage } from './isErrorWithMessage'
import { isFetchBaseQueryError } from './isFetchBaseQueryError'

export const getErrorMessage = (err: unknown) => {
  if (isFetchBaseQueryError(err)) {
    if ('error' in err) {
      return err.error
    } else if (typeof err.data === 'string') {
      return err.data
    } else {
      return JSON.stringify(err.data)
    }
  } else if (isErrorWithMessage(err)) {
    return err.message
  }
}
