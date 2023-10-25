import { memo, type FC } from 'react'

import { Outlet } from 'react-router-dom'

import { Navbar } from '@widgets/Navbar'

import { useLoadState } from '../lib'

export const RootLayout: FC = memo(function RootLayout() {
  useLoadState()

  return (
    <div id="app">
      <Navbar />
      <Outlet />
    </div>
  )
})
