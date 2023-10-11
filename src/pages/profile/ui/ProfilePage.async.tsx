import { lazy } from 'react'

export const ProfilePageAsync = lazy(
  async () =>
    await new Promise((res) =>
      setTimeout(() => {
        // @ts-expect-error - Temporary solution
        res(import('./ProfilePage'))
      }, 1500)
    )
)
