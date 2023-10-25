import type { Meta, StoryObj } from '@storybook/react'

import { mockedUser, withFullscreen, withRouter, withStore } from '@shared/lib/storybook'
import { getAboutRoute } from '@shared/constants/router'

import AboutPage from './AboutPage'

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
  parameters: { layout: 'fullscreen' },
  decorators: [
    withFullscreen,
    withRouter({ initialEntries: [getAboutRoute()], routePath: getAboutRoute() }),
    withStore({ user: mockedUser })
  ]
} satisfies Meta<typeof AboutPage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
