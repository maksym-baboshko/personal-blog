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
        jwt: null,
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
        jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1heC5iYWJvc2hrb0BnbWFpbC5jb20iLCJpYXQiOjE2OTY5NTY0NDUsImV4cCI6MTY5Njk2MDA0NSwic3ViIjoiMSJ9.vCPmHTf-dZbjPtYRwFdji_2JvFVjM2OfER7ZquRNsTo'
      }
    })
  ]
}
