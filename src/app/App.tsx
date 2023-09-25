import { type FC } from 'react'

import cn from 'classnames'

import { AppRouter } from '@app/router'
import { Navbar } from '@widgets/Navbar'
import { Sidebar } from '@widgets/Sidebar'
import { useTheme } from '@shared/lib/hooks/useTheme'

import '@app/config/i18n'

import './styles/index.scss'

const App: FC = () => {
  const { theme } = useTheme()

  return (
    <div className={cn('app', theme)}>
      <Navbar />

      <div className="content-wrapper">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App
