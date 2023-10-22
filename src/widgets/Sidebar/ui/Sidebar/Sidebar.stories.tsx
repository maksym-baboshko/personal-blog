import type { Meta, StoryObj } from '@storybook/react'

import { withFullscreen, withRouter } from '@shared/lib/storybook'

import { Sidebar } from './Sidebar'

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  parameters: { layout: 'fullscreen' },
  decorators: [withFullscreen, withRouter()]
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
