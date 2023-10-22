import type { Meta, StoryObj } from '@storybook/react'

import { getProfileRoute } from '@shared/constants/router'
import { userData, withFullscreen, withRouter, withStore } from '@shared/lib/storybook'

import ProfilePage from './ProfilePage'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: { layout: 'fullscreen' },
  decorators: [
    withFullscreen,
    withRouter({ initialEntries: [getProfileRoute(1)], routePath: getProfileRoute(':id') }),
    withStore({ app: { isInitialized: true, status: 'initialized' }, user: { data: userData } })
  ]
} satisfies Meta<typeof ProfilePage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
