import { createBrowserRouter } from 'react-router-dom'

import {
  getRootRoute,
  getAboutRoute,
  getPostsRoute,
  getProfileRoute,
  getSettingsRoute,
  getNotFoundRoute
} from '@shared/constants/router'
import { RootPage } from '@pages/root'
import { AboutPage } from '@pages/about'
import { ProfilePage } from '@pages/profile'
import { PageError } from '@widgets/PageError'
import { RootLayout } from '@pages/root-layout'
import { NotFoundPage } from '@pages/not-found'

export const router = createBrowserRouter([
  {
    id: 'root',
    path: getRootRoute(),
    Component: RootLayout,
    ErrorBoundary: PageError,
    children: [
      {
        index: true,
        Component: RootPage
      },
      {
        path: getPostsRoute(),
        Component: AboutPage
      },
      {
        path: getProfileRoute(':id'),
        Component: ProfilePage
      },
      {
        path: getSettingsRoute(),
        Component: AboutPage
      },
      {
        path: getAboutRoute(),
        Component: AboutPage
      },
      {
        path: getNotFoundRoute(),
        Component: NotFoundPage
      },
      {
        path: '*',
        Component: NotFoundPage
      }
    ]
  }
])
