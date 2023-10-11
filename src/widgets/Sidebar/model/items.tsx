import { type SVGAttributes, type FC } from 'react'

import { routesConfig } from '@app/config/router'
import Logo from '@shared/assets/icons/logo.svg'
import PostsIcon from '@shared/assets/icons/posts.svg'
import AboutIcon from '@shared/assets/icons/about.svg'
import ProfileIcon from '@shared/assets/icons/profile.svg'
import SettingsIcon from '@shared/assets/icons/settings.svg'

export interface ISidebarItem {
  path: string
  textKey: string
  icon: FC<SVGAttributes<SVGElement>>
}

export const sidebarItems: ISidebarItem[] = [
  {
    path: routesConfig.main.path,
    textKey: 'main',
    icon: () => <Logo />
  },
  {
    path: routesConfig.posts.path,
    textKey: 'posts',
    icon: () => <PostsIcon />
  },
  {
    path: routesConfig.profile.path,
    textKey: 'profile',
    icon: () => <ProfileIcon />
  },
  {
    path: routesConfig.settings.path,
    textKey: 'settings',
    icon: () => <SettingsIcon />
  },
  {
    path: routesConfig.about.path,
    textKey: 'about',
    icon: () => <AboutIcon />
  }
]
