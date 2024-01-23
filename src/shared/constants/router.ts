export const getRootRoute = (): string => '/'

export const getFeedRoute = (): string => '/feed'
export const getPostRoute = (id: number | string): string => `/post/${id}`
export const getProfileRoute = (id: number | string): string => `/profile/${id}`
export const getSettingsRoute = (): string => '/settings'
export const getAboutRoute = (): string => '/about'

export const getNotFoundRoute = (): string => '*'
