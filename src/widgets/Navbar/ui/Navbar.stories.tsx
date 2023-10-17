import type { Meta, StoryObj } from '@storybook/react'

import { withFullscreen, withStore } from '@shared/lib/storybook'

import { Navbar } from './Navbar'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  parameters: { layout: 'fullscreen' },
  decorators: [withFullscreen]
} satisfies Meta<typeof Navbar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    withStore({
      user: {
        profile: null,
        token: null,
        isAuthorized: false,
        initializationStatus: 'idle',
        initializationError: null
      }
    })
  ]
}

export const LoggedIn: Story = {
  decorators: [
    withStore({
      user: {
        profile: {
          email: 'max.baboshko@gmail.com',
          fname: 'Maksym',
          lname: 'Baboshko',
          id: 1
        },
        isAuthorized: true,
        initializationStatus: 'success',
        initializationError: null,
        token: 'jwt'
      }
    })
  ]
}
