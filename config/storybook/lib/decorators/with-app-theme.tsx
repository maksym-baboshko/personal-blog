import { type Decorator } from '@storybook/react'

import { sbThemeConfig } from '@shared/lib/storybook'
import { type AppTheme } from '@shared/constants/theme'
import { ThemeProvider } from '@app/providers/ThemeProvider'

export const withAppTheme: Decorator = (Story, ctx) => {
  const theme = ctx.parameters.theme ?? ctx.globals.theme

  return (
    <ThemeProvider initialTheme={sbThemeConfig.themes[theme] as AppTheme}>
      <Story />
    </ThemeProvider>
  )
}
