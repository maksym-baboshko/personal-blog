import type { Meta, StoryObj } from '@storybook/react'

import { renderWithLocalization } from '@shared/lib/storybook'

import { Button } from './Button'
import { ButtonVariant } from './Button.types'

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

const captions = {
  uk: 'Кнопка',
  en: 'Button',
  nb: 'Knapp'
}

export const Primary: Story = {
  render: renderWithLocalization(Button, captions),
  args: {
    variant: ButtonVariant.PRIMARY,
    children: 'Button'
  }
}

export const Outlined: Story = {
  args: {
    variant: ButtonVariant.OUTLINED,
    children: 'Button'
  }
}

export const Default: Story = {
  args: {
    children: 'Button'
  }
}
