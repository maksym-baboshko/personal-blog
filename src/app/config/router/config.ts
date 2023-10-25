import { createBrowserRouter } from 'react-router-dom'

import {
  getAppRoute,
  getRootRoute,
  getAboutRoute,
  getPostsRoute,
  getProfileRoute,
  getSettingsRoute,
  getNotFoundRoute
} from '@shared/constants/router'
import { MainPage } from '@pages/main'
import { AboutPage } from '@pages/about'
import { ProfilePage } from '@pages/profile'
import { LandingPage } from '@pages/landing'
import { AppLayout } from '@pages/app-layout'
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
        Component: LandingPage
      },
      {
        path: '*',
        Component: NotFoundPage
      },
      {
        id: 'app',
        path: getAppRoute(),
        Component: AppLayout,
        children: [
          {
            index: true,
            Component: MainPage
          },
          {
            path: getPostsRoute(),
            Component: MainPage
          },
          {
            path: getProfileRoute(':id'),
            Component: ProfilePage
          },
          {
            path: getSettingsRoute(),
            Component: MainPage
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
    ]
  }
])
