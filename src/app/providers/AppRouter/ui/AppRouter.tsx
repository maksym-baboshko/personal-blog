import { type FC, Suspense } from 'react'

import { Route, Routes } from 'react-router-dom'

import { PageLoader } from '@widgets/PageLoader'

import { routesConfig } from '../../../config/router'

export const AppRouter: FC = () => {
  return (
    <div className="page-wrapper">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {Object.values(routesConfig).map(({ path, element }) => {
            return <Route key={path} path={path} element={element} />
          })}
        </Routes>
      </Suspense>
    </div>
  )
}
