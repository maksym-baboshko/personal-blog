import ReactDOM from 'react-dom/client'

import { App, JointProvider } from '@app'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <JointProvider>
    <App />
  </JointProvider>
)
