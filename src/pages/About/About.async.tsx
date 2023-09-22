import { lazy } from 'react';

export const AboutAsync = lazy(
  () =>
    new Promise((res) =>
      setTimeout(() => {
        // @ts-ignore
        res(import('./About'));
      }, 1500)
    )
);
