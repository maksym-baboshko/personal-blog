import type { Meta, StoryObj } from '@storybook/react'

import { getTranslatedCaption } from '@shared/lib/storybook'

import { Link } from './Link'

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
  args: {
    color: 'primary',
    children: 'Link'
  },
  render: (args, ctx) => {
    return <Link {...args}>{getTranslatedCaption(ctx.globals.locale, captions)}</Link>
  }
}

export const Default: Story = {
  args: {
    children: 'Link'
  }
}
