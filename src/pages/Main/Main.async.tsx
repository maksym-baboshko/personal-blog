import { lazy } from 'react';

export const MainAsync = lazy(
  () =>
    new Promise((res) =>
      setTimeout(() => {
        // @ts-ignore
        res(import('./Main'));
      }, 1500)
    )
);
