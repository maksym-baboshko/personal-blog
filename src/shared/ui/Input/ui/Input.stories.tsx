import type { Meta, StoryObj } from '@storybook/react'

import { getTranslatedCaption } from '@shared/lib/storybook'

import { Input } from './Input'

const meta = {
  title: 'shared/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs']
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

const placeholderCaptions = {
  uk: 'Заповнювач',
  en: 'Placeholder',
  nb: 'Plassholder'
}

export const Heading: Story = {
  args: {},
  render: (args, ctx) => {
    return (
      <Input
        placeholder={getTranslatedCaption(ctx.globals.locale, placeholderCaptions)}
        {...args}
      />
    )
  }
}
