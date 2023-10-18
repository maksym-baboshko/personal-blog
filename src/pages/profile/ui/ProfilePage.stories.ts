import type { Meta, StoryObj } from '@storybook/react'

import { withFullscreen, withStore } from '@shared/lib/storybook'

import ProfilePage from './ProfilePage'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: { layout: 'fullscreen' },
  decorators: [withFullscreen, withStore()]
} satisfies Meta<typeof ProfilePage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
