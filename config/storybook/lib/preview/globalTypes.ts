import { sbLocales, sbDefaultLocale } from '@shared/lib/storybook'

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

export const globalTypes = { locale }
