import { StrictMode, Suspense } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from '@app/providers/ThemeProvider'
import { ErrorBoundary } from '@app/providers/ErrorBoundary'

import { type JointProviderFC } from './JointProvider.types'

export const JointProvider: JointProviderFC = ({ children }) => {
  return (
    <StrictMode>
      <BrowserRouter>
        <ErrorBoundary>
          <ThemeProvider>
            <Suspense fallback={null}>{children}</Suspense>
          </ThemeProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </StrictMode>
  )
}
