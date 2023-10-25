import type { Meta, StoryObj } from '@storybook/react'

import { getRootRoute } from '@shared/constants/router'
import { mockedUser, withFullscreen, withRouter, withStore } from '@shared/lib/storybook'

import { Navbar } from './Navbar'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  parameters: { layout: 'fullscreen' },
  decorators: [
    withFullscreen,
    withRouter({ initialEntries: [getRootRoute()], routePath: getRootRoute() })
  ]
} satisfies Meta<typeof Navbar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    withStore({
      user: {
        data: null,
        token: null,
        isAuthenticated: false
      }
    })
  ]
}

export const LoggedIn: Story = {
  decorators: [withStore({ user: mockedUser })]
}
