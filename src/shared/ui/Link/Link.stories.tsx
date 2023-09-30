import type { Meta, StoryObj } from '@storybook/react'

import { renderWithLocalization } from '@shared/lib/storybook'

import { Link } from './Link'
import { LinkVariant } from './Link.types'

const meta = {
  title: 'shared/Link',
  component: Link,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { to: '#' }
} satisfies Meta<typeof Link>

export default meta

type Story = StoryObj<typeof meta>

const captions = {
  uk: 'Посилання',
  en: 'Link',
  nb: 'Link'
}

export const Primary: Story = {
  render: renderWithLocalization(Link, captions),
  args: {
    variant: LinkVariant.PRIMARY,
    children: 'Link'
  }
}

export const Secondary: Story = {
  args: {
    variant: LinkVariant.SECONDARY,
    children: 'Link'
  }
}
