import { type ReactNode } from 'react'

import { MemoryRouter, type MemoryRouterProps } from 'react-router-dom'

export const withRouter = (component: ReactNode, options: MemoryRouterProps = {}): ReactNode => {
  return <MemoryRouter {...options}>{component}</MemoryRouter>
}
