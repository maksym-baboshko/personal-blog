import { type FC } from 'react'

import { Navbar } from '@widgets/Navbar'
import { Sidebar } from '@widgets/Sidebar'

import { useLoadState } from './hooks'
import { AppRouter } from './providers/AppRouter'

import './config/i18n'
import './styles/index.scss'

const App: FC = () => {
  useLoadState()

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
