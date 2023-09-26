import {
  AppRoutes,
  getMainRoute,
  getAboutRoute,
  getNotFoundRoute
} from '@shared/constants/router'
import { MainPage } from '@pages/main'
import { AboutPage } from '@pages/about'
import { NotFoundPage } from '@pages/not-found'
import { type AppRoutesProps } from '@shared/types/router'

export const routesConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getMainRoute(),
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
