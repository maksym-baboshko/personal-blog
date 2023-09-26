import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

import { PageError } from '@widgets/PageError'

import { type ErrorBoundaryFC } from './ErrorBoundary.types'

export const ErrorBoundary: ErrorBoundaryFC = ({ children }) => {
  const handleResetError = (): void => {
    location.reload()
  }

  const logError = (): void => {
    // TODO: add some logging service here
  }

  return (
    <ReactErrorBoundary
      onError={logError}
      onReset={handleResetError}
      FallbackComponent={PageError}
    >
      {children}
    </ReactErrorBoundary>
  )
}
