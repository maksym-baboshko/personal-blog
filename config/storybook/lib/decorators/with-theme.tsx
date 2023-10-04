import { useEffect } from 'react'

import { type Decorator } from '@storybook/react'

import { getSbBackground } from '@shared/lib/storybook'
import { ThemeProvider } from '@app/providers/ThemeProvider'

export const withTheme: Decorator = (Story, ctx) => {
  const theme = ctx.parameters.themes ?? ctx.globals.themes

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    ctx.globals.backgrounds = { value: getSbBackground(theme) }
  }, [theme, ctx.globals])

  return (
    <ThemeProvider initialTheme={theme}>
      <div id="app" className={theme}>
        <Story />
      </div>
    </ThemeProvider>
  )
}
