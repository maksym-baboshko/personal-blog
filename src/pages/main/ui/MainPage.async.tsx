import { lazy } from 'react'

export const MainPageAsync = lazy(
  async () =>
    await new Promise((res) =>
      setTimeout(() => {
        // @ts-expect-error - Temporary solution
        res(import('./MainPage'))
      }, 1500)
    )
)
