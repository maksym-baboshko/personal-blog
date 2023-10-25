import type { Meta, StoryObj } from '@storybook/react'

import { withFullscreen } from '@shared/lib/storybook'

import LandingPage from './LandingPage'

const meta = {
  title: 'pages/LandingPage',
  component: LandingPage,
  parameters: { layout: 'fullscreen' },
  decorators: [withFullscreen]
} satisfies Meta<typeof LandingPage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
