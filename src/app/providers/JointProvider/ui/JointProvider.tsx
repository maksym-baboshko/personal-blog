import { Suspense } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from '../../ThemeProvider'
import { ErrorBoundary } from '../../ErrorBoundary'
import { StoreProvider } from '../../StoreProvider'

import { type JointProviderFC } from './JointProvider.types'

export const JointProvider: JointProviderFC = ({ children }) => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ErrorBoundary>
            <Suspense fallback={null}>{children}</Suspense>
          </ErrorBoundary>
        </ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
  )
}
