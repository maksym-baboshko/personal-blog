export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not-found'
}

export const getMainRoute = (): string => '/'
export const getAboutRoute = (): string => '/about'
export const getNotFoundRoute = (): string => '*'
