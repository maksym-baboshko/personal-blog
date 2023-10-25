import ReactDOM from 'react-dom/client'

import { AppProvider } from '@app/providers/AppProvider'

import './app/config/i18n'
import './app/styles/index.scss'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(<AppProvider />)
