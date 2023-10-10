import type { Meta, StoryObj } from '@storybook/react'

import ArrowIcon from '@shared/assets/icons/arrow.svg'
import { appThemes } from '@shared/constants/appTheme'
import { renderWithLocalization } from '@shared/lib/storybook'

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
  render: (args, ctx) => {
    const iconColor = appThemes.find((t) => t.value === ctx.globals.themes)?.contrastColor

    return (
      <Button {...args}>
        <ArrowIcon fill={iconColor} />
      </Button>
    )
  }
}

export const Disabled: Story = {
  args: {
    variant: 'solid',
    children: 'Button',
    disabled: true
  }
}
