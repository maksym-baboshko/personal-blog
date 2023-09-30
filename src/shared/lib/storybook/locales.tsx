import { type Args } from '@storybook/types'
import { type StoryContext } from '@storybook/react'

import { locales, supportedLngs } from '@shared/constants/i18n'

export const sbLocales = Object.entries(locales).map(([lng, { shortTitle, flag }]) => ({
  value: lng,
  title: shortTitle,
  left: flag
}))

export const sbDefaultLocale = sbLocales[1]

type LocaleKeys = keyof typeof locales
type TranslatedCaptions = Record<LocaleKeys, string>

const getTranslatedCaption = (locale: string, captions: TranslatedCaptions): string =>
  captions[(supportedLngs.find((lng) => lng === locale) ?? sbDefaultLocale.value) as LocaleKeys]

export const renderWithLocalization = (
  Component: React.ComponentType<any>,
  captions: TranslatedCaptions
): any => {
  // eslint-disable-next-line react/display-name
  return (args: Args, ctx: StoryContext) => {
    return <Component {...args}>{getTranslatedCaption(ctx.globals.locale, captions)}</Component>
  }
}
