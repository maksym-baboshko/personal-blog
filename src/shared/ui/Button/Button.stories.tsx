import type { Meta, StoryObj } from '@storybook/react'

import { renderWithLocalization } from '@shared/lib/storybook'
import ArrowIcon from '@shared/assets/icons/arrow-bottom.svg'

import { Button } from './Button'

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

export const Solid: Story = {
  render: renderWithLocalization(Button, captions),
  args: {
    variant: 'solid',
    children: 'Button'
  }
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Button'
  }
}

export const Default: Story = {
  args: {
    children: 'Button'
  }
}

export const Icon: Story = {
  args: {
    isIcon: true,
    variant: 'light'
  },
  render: (args) => {
    return (
      <Button {...args}>
        <ArrowIcon />
      </Button>
    )
  }
}
