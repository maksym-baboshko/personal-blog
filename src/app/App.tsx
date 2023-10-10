import { type FC } from 'react'

import { AppRouter } from '@app/router'
import { Navbar } from '@widgets/Navbar'
import { Sidebar } from '@widgets/Sidebar'

import { useUserInit } from './lib/hooks'

import '@app/config/i18n'
import './styles/index.scss'

const App: FC = () => {
  useUserInit()

  return (
    <div id="app">
      <Navbar />

      <div className="content-wrapper">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App
