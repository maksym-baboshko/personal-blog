import { useEffect } from 'react'

import { type Decorator } from '@storybook/react'

import { getSbBackground } from '@shared/lib/storybook'
import { ThemeProvider } from '@app/providers/ThemeProvider'

export const withTheme: Decorator = (Story, ctx) => {
  const theme = ctx.parameters.themes ?? ctx.globals.themes

  useEffect(() => {
    ctx.globals.backgrounds = { value: getSbBackground(theme) }
  }, [theme])

  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  )
}
