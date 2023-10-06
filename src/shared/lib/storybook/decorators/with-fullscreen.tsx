import { type Decorator } from '@storybook/react'

export const withFullscreen: Decorator = (Story) => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Story />
    </div>
  )
}
