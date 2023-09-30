import { sbLocales, sbDefaultLocale } from '@shared/lib/storybook'
import { appThemes, defaultAppTheme } from '@shared/constants/appTheme'

const locale = {
  name: 'Locale',
  description: 'Global locale for components',
  defaultValue: sbDefaultLocale.value,
  toolbar: {
    icon: 'globe',
    dynamicTitle: true,
    items: sbLocales
  }
}

const themes = {
  name: 'Themes',
  description: 'Global theme for components',
  defaultValue: defaultAppTheme.value,
  toolbar: {
    title: 'Themes',
    icon: 'circlehollow',
    items: appThemes,
    dynamicTitle: true
  }
}

export const globalTypes = { locale, themes }
