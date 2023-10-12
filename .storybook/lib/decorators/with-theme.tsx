/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react'

import { type Decorator } from '@storybook/react'

import { getSbBackground } from '@shared/lib/storybook'
import { ThemeProvider } from '@app/providers/ThemeProvider'

export const withTheme: Decorator = (Story, ctx) => {
  const theme = ctx.parameters.themes ?? ctx.globals.themes
  const bg = getSbBackground(theme)

  useEffect(() => {
    const bgStyles = `background-color: ${bg} !important; transition: background-color 0.3s;`

    document.body.className = theme
    document.body.setAttribute('style', bgStyles)
    ctx.globals.backgrounds = { value: bg }
  }, [theme, bg, ctx.globals])

  return (
    <ThemeProvider initialTheme={theme}>
      <div id="app">
        <Story />
      </div>
    </ThemeProvider>
  )
}
