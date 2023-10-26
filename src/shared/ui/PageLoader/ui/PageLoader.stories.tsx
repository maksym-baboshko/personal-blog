import type { Meta, StoryObj } from '@storybook/react'

import { withFullscreen } from '@shared/lib/storybook'

import { PageLoader } from './PageLoader'

const meta = {
  title: 'shared/PageLoader',
  component: PageLoader,
  parameters: { layout: 'fullscreen' },
  decorators: [withFullscreen]
} satisfies Meta<typeof PageLoader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
