export const getRootRoute = (): string => '/'

export const getPostsRoute = (): string => '/posts'
export const getProfileRoute = (id: number | string): string => `/profile/${id}`
export const getSettingsRoute = (): string => '/settings'
export const getAboutRoute = (): string => '/about'

export const getNotFoundRoute = (): string => '*'
