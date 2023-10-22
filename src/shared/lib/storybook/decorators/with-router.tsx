import { type Decorator } from '@storybook/react'
import { MemoryRouter, type MemoryRouterProps, Route, Routes } from 'react-router-dom'

interface WithRouterOptions extends MemoryRouterProps {
  routePath?: string
}

type WithRouterFunc = (options?: WithRouterOptions) => Decorator

export const withRouter: WithRouterFunc = (options) => {
  const { routePath, ...restOptions } = options ?? {}

  return function withRouter(Story) {
    return (
      <MemoryRouter {...restOptions}>
        {routePath ? (
          <Routes>
            <Route path={routePath} element={<Story />} />
          </Routes>
        ) : (
          <Story />
        )}
      </MemoryRouter>
    )
  }
}
