import type { Meta, StoryObj } from '@storybook/react'

import { getTranslatedCaption, withFullscreen } from '@shared/lib/storybook'

import { Modal } from './Modal'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: { layout: 'fullscreen' },
  decorators: [withFullscreen],
  args: { isOpen: true }
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

const modalCaptions = {
  uk: 'Ви впевнені, що хочете продовжити? Дія, яку ви збираєтеся виконати, може вплинути на важливі дані. Підтвердіть свій вибір, натиснувши "Так".',
  en: "Are you sure you want to continue? The action you are about to perform may impact important data. Confirm your choice by clicking 'Yes'.",
  nb: "Er du sikker på at du ønsker å fortsette? Handlingen du er i ferd med å utføre, kan påvirke viktige data. Bekreft ditt valg ved å klikke 'Ja'."
}

export const Default: Story = {
  render: (args, ctx) => {
    return <Modal {...args}>{getTranslatedCaption(ctx.globals.locale, modalCaptions)}</Modal>
  }
}
