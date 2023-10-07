/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect, useRef, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { getTranslatedCaption, withFullscreen } from '@shared/lib/storybook'
import { Button } from '@shared/ui/Button'

import { Modal } from './Modal'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: { layout: 'fullscreen' },
  decorators: [withFullscreen]
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

const modalCaptions = {
  uk: 'Ви впевнені, що хочете продовжити? Дія, яку ви збираєтеся виконати, може вплинути на важливі дані. Підтвердіть свій вибір, натиснувши "Так".',
  en: "Are you sure you want to continue? The action you are about to perform may impact important data. Confirm your choice by clicking 'Yes'.",
  nb: "Er du sikker på at du ønsker å fortsette? Handlingen du er i ferd med å utføre, kan påvirke viktige data. Bekreft ditt valg ved å klikke 'Ja'."
}

const buttonCaptions = {
  uk: 'Показати модалку',
  en: 'Show modal',
  nb: 'Vis modal'
}

export const Default: Story = {
  render: (args, ctx) => {
    const [hasModal, setHasModal] = useState(false)
    const modalTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const toggleModal = useCallback(() => {
      setHasModal((hasModal) => !hasModal)
    }, [])

    useEffect(() => {
      modalTimerRef.current = setTimeout(() => {
        setHasModal(true)
      }, 0)

      return () => {
        if (modalTimerRef.current) {
          clearTimeout(modalTimerRef.current)
          modalTimerRef.current = null
        }
      }
    }, [])

    return (
      <>
        <Button onClick={toggleModal} variant="solid">
          {getTranslatedCaption(ctx.globals.locale, buttonCaptions)}
        </Button>

        <Modal isOpen={hasModal} onClose={toggleModal} {...args}>
          {getTranslatedCaption(ctx.globals.locale, modalCaptions)}
        </Modal>
      </>
    )
  }
}
