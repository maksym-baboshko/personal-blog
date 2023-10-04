import { StrictMode, Suspense } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from '@app/providers/ThemeProvider'
import { ErrorBoundary } from '@app/providers/ErrorBoundary'
import { StoreProvider } from '@app/providers/StoreProvider'

import { type JointProviderFC } from './JointProvider.types'

export const JointProvider: JointProviderFC = ({ children }) => {
  return (
    <StrictMode>
      <StoreProvider>
        <BrowserRouter>
          <ThemeProvider>
            <ErrorBoundary>
              <Suspense fallback={null}>{children}</Suspense>
            </ErrorBoundary>
          </ThemeProvider>
        </BrowserRouter>
      </StoreProvider>
    </StrictMode>
  )
}
