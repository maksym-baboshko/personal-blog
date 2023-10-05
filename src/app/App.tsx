import { type FC } from 'react'

import { AppRouter } from '@app/router'
import { Navbar } from '@widgets/Navbar'
import { Sidebar } from '@widgets/Sidebar'

import '@app/config/i18n'
import './styles/index.scss'

const App: FC = () => {
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
