import type { Meta, StoryObj } from '@storybook/react'

import { getAppRoute, getProfileRoute } from '@shared/constants/router'
import { mockedUser, withFullscreen, withRouter, withStore } from '@shared/lib/storybook'

import ProfilePage from './ProfilePage'

const getRoute = (id: number | string) => `${getAppRoute()}/${getProfileRoute(id)}`

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: { layout: 'fullscreen' },
  decorators: [
    withFullscreen,
    withRouter({ initialEntries: [getRoute(1)], routePath: getRoute(':id') }),
    withStore({ user: mockedUser })
  ]
} satisfies Meta<typeof ProfilePage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
