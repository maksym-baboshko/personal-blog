/* eslint-disable react-hooks/rules-of-hooks */

import { useCallback, useEffect, useRef, useState } from 'react'

import { type ArgsStoryFn } from '@storybook/types'
import type { Meta, ReactRenderer, StoryObj } from '@storybook/react'

import { Button } from '@shared/ui/Button'
import { getTranslatedCaption, withFullscreen, withStore } from '@shared/lib/storybook'

import { AuthModal } from './AuthModal'
import { type AuthModalProps } from './AuthModal.types'

const meta = {
  title: 'features/Authentication',
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

const render: ArgsStoryFn<ReactRenderer, AuthModalProps> = (args, ctx) => {
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

export const Default: Story = {
  render,
  decorators: [withStore({ auth: { status: 'idle', error: null } })]
}

export const Loading: Story = {
  render,
  decorators: [withStore({ auth: { status: 'loading', error: null } })]
}

export const Error: Story = {
  render,
  decorators: [withStore({ auth: { status: 'error', error: 'Something went wrong' } })]
}
