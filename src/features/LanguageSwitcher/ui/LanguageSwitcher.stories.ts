import type { Meta, StoryObj } from '@storybook/react'

import { withRouter } from '@shared/lib/storybook'

import { LanguageSwitcher } from './LanguageSwitcher'

const meta = {
  title: 'features/LanguageSwitcher',
  component: LanguageSwitcher,
  parameters: { layout: 'centered' },
  decorators: [withRouter()]
} satisfies Meta<typeof LanguageSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
