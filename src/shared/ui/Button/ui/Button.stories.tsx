import type { Meta, StoryObj } from '@storybook/react'

import ArrowIcon from '@shared/assets/icons/arrow.svg'
import { appThemes } from '@shared/constants/theme'
import { getTranslatedCaption } from '@shared/lib/storybook'

import { Button } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger']
    },
    variant: {
      control: 'select',
      options: ['light', 'solid', 'outlined']
    },
    appearance: {
      control: 'select',
      options: ['rectangle', 'square', 'circle']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    }
  }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

const captions = {
  uk: 'Кнопка',
  en: 'Button',
  nb: 'Knapp'
}

export const Solid: Story = {
  args: {
    variant: 'solid',
    children: 'Button'
  },
  render: (args, ctx) => {
    return <Button {...args}>{getTranslatedCaption(ctx.globals.locale, captions)}</Button>
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
    const iconColor = appThemes.find((t) => t.key === ctx.globals.themes)?.contrastColor

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

export const Loading: Story = {
  args: {
    variant: 'solid',
    children: 'Button',
    loading: true
  }
}
