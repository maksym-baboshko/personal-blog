import { lazy } from 'react'

export const PostPageAsync = lazy(
  async () =>
    await new Promise((res) =>
      setTimeout(() => {
        // @ts-expect-error - Temporary solution
        res(import('./PostPage'))
      }, 1500)
    )
)
