import { type ReactNode } from 'react'

import { BrowserRouter } from 'react-router-dom'

export const withRouter = (component: ReactNode): ReactNode => {
  return <BrowserRouter>{component}</BrowserRouter>
}
