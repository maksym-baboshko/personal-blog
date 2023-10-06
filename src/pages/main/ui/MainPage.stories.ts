import type { Meta, StoryObj } from '@storybook/react'

import { withFullscreen } from '@shared/lib/storybook'

import MainPage from './MainPage'

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  parameters: { layout: 'fullscreen' },
  decorators: [withFullscreen]
} satisfies Meta<typeof MainPage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
