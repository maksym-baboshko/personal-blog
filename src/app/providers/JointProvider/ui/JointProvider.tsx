import { StrictMode, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from '@app/providers/ThemeProvider'

import { type JointProviderFC } from './JointProvider.types'

export const JointProvider: JointProviderFC = ({ children }) => {
  return (
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  )
}
