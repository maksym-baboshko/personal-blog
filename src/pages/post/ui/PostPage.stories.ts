import type { Meta, StoryObj } from '@storybook/react'

import { mockedUser, withFullscreen, withRouter, withStore } from '@shared/lib/storybook'

import PostPage from './PostPage'

const meta = {
  title: 'pages/PostPage',
  component: PostPage,
  parameters: { layout: 'fullscreen' },
  decorators: [withFullscreen, withRouter(), withStore({ user: mockedUser })]
} satisfies Meta<typeof PostPage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
