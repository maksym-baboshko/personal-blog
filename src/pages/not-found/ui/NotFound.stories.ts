import type { Meta, StoryObj } from '@storybook/react'

import { withFullscreen } from '@shared/lib/storybook'

import { NotFound } from './NotFound'

const meta = {
  title: 'pages/NotFound',
  component: NotFound,
  parameters: { layout: 'fullscreen' },
  decorators: [withFullscreen]
} satisfies Meta<typeof NotFound>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
