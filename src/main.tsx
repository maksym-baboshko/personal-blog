import ReactDOM from 'react-dom/client';

import { App, JointProvider } from '@app';

ReactDOM.createRoot(document.getElementById('root')).render(
  <JointProvider>
    <App />
  </JointProvider>
);
