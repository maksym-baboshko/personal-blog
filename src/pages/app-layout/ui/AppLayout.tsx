import { type FC, Suspense } from 'react'

import { Outlet } from 'react-router-dom'

import { Sidebar } from '@widgets/Sidebar'
import { PageLoader } from '@widgets/PageLoader'

import { AuthGuard } from './AuthGuard'

export const AppLayout: FC = function AppLayout() {
  return (
    <AuthGuard>
      <div id="content-wrapper">
        <Sidebar />
        <div id="page-wrapper">
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </AuthGuard>
  )
}
