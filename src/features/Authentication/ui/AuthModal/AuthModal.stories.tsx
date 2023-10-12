import type { Meta, StoryObj } from '@storybook/react'

import { withFullscreen, withStore } from '@shared/lib/storybook'

import { AuthModal } from './AuthModal'

const meta = {
  title: 'features/Authentication',
  component: AuthModal,
  parameters: { layout: 'fullscreen' },
  decorators: [withFullscreen],
  args: { isOpen: true }
} satisfies Meta<typeof AuthModal>

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
  decorators: [withStore({ auth: { status: 'idle', error: null } })]
}

export const Loading: Story = {
  decorators: [withStore({ auth: { status: 'loading', error: null } })]
}

export const Error: Story = {
  decorators: [withStore({ auth: { status: 'error', error: 'Something went wrong' } })]
}
