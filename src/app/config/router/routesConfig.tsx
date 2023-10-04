import { MainPage } from '@pages/main'
import { AboutPage } from '@pages/about'
import { NotFoundPage } from '@pages/not-found'
import { type AppRoutesConfig } from '@shared/types'
import { AppRoutes, getMainRoute, getAboutRoute, getNotFoundRoute } from '@shared/constants/router'

export const routesConfig: Record<AppRoutes, AppRoutesConfig> = {
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
