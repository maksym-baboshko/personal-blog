import type { Meta, StoryObj } from '@storybook/react'

import { withFullscreen, withStore } from '@shared/lib/storybook'

import { AuthModal } from './AuthModal'

const meta = {
  title: 'features/Authentication',
  component: AuthModal,
  parameters: { layout: 'fullscreen' },
  decorators: [withFullscreen, withStore()],
  args: { isOpen: true }
} satisfies Meta<typeof AuthModal>

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {}
