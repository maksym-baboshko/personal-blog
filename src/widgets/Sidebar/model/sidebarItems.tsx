import { type SVGAttributes, type FC } from 'react'

import {
  getAboutRoute,
  getPostsRoute,
  getProfileRoute,
  getRootRoute,
  getSettingsRoute
} from '@shared/constants/router'
import Logo from '@shared/assets/icons/logo.svg'
import PostsIcon from '@shared/assets/icons/posts.svg'
import AboutIcon from '@shared/assets/icons/about.svg'
import ProfileIcon from '@shared/assets/icons/profile.svg'
import SettingsIcon from '@shared/assets/icons/settings.svg'

export interface ISidebarItem {
  path: string
  textKey: 'main' | 'posts' | 'profile' | 'settings' | 'about'
  icon: FC<SVGAttributes<SVGElement>>
}

export const sidebarItems: ISidebarItem[] = [
  {
    path: getRootRoute(),
    textKey: 'main',
    icon: () => <Logo />
  },
  {
    path: getPostsRoute(),
    textKey: 'posts',
    icon: () => <PostsIcon />
  },
  {
    path: getProfileRoute(':id'),
    textKey: 'profile',
    icon: () => <ProfileIcon />
  },
  {
    path: getSettingsRoute(),
    textKey: 'settings',
    icon: () => <SettingsIcon />
  },
  {
    path: getAboutRoute(),
    textKey: 'about',
    icon: () => <AboutIcon />
  }
]
