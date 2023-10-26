import { type FC } from 'react'

import { RouterProvider } from 'react-router-dom'

import { PageLoader } from '@shared/ui/PageLoader'

import { router } from '../../../config/router'
import { ThemeProvider } from '../../ThemeProvider'
import { StoreProvider } from '../../StoreProvider'

export const AppProvider: FC = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <RouterProvider router={router} fallbackElement={<PageLoader />} />
      </ThemeProvider>
    </StoreProvider>
  )
}
