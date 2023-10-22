import {
  AppRoutes,
  getMainRoute,
  getAboutRoute,
  getPostsRoute,
  getProfileRoute,
  getSettingsRoute,
  getNotFoundRoute
} from '@shared/constants/router'
import { MainPage } from '@pages/main'
import { AboutPage } from '@pages/about'
import { ProfilePage } from '@pages/profile'
import { NotFoundPage } from '@pages/not-found'

import { type AppRoutesConfig } from './types'

export const routesConfig: Record<AppRoutes, AppRoutesConfig> = {
  [AppRoutes.MAIN]: {
    path: getMainRoute(),
    element: <MainPage />
  },
  [AppRoutes.POSTS]: {
    path: getPostsRoute(),
    element: <MainPage />
  },
  [AppRoutes.PROFILE]: {
    path: getProfileRoute(':id'),
    element: <ProfilePage />
  },
  [AppRoutes.SETTINGS]: {
    path: getSettingsRoute(),
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: getAboutRoute(),
    element: <AboutPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: getNotFoundRoute(),
    element: <NotFoundPage />
  }
}
