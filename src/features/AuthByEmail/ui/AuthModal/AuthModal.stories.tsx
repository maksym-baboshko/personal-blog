/* eslint-disable react-hooks/rules-of-hooks */

import { useCallback, useEffect, useRef, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@shared/ui/Button'
import { getTranslatedCaption, withFullscreen } from '@shared/lib/storybook'

import { AuthModal } from './AuthModal'

const meta = {
  title: 'features/AuthByEmail',
  component: AuthModal,
  parameters: { layout: 'fullscreen' },
  decorators: [withFullscreen]
} satisfies Meta<typeof AuthModal>

export default meta

type Story = StoryObj<typeof meta>

const buttonCaptions = {
  uk: 'Увійти',
  en: 'Sign in',
  nb: 'Logg inn'
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

        <AuthModal isOpen={hasModal} onClose={toggleModal} {...args} />
      </>
    )
  }
}
