export enum AppRoutes {
  MAIN = 'main',
  POSTS = 'posts',
  PROFILE = 'profile',
  SETTINGS = 'settings',
  ABOUT = 'about',
  NOT_FOUND = 'not-found'
}

export const getMainRoute = (): string => '/'
export const getPostsRoute = (): string => '/posts'
export const getProfileRoute = (): string => '/profile'
export const getSettingsRoute = (): string => '/settings'
export const getAboutRoute = (): string => '/about'
export const getNotFoundRoute = (): string => '*'
