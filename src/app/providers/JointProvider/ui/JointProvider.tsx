import { StrictMode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@app/providers/ThemeProvider';

import { JointProviderProps } from './JointProvider.props';

export const JointProvider = ({ children }: JointProviderProps) => {
  return (
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
};
