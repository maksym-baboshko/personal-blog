import { locales, supportedLngs } from '@shared/constants/i18n'

export const sbLocales = Object.entries(locales).map(([lng, { shortTitle, flag }]) => ({
  value: lng,
  title: shortTitle,
  left: flag
}))

export const sbDefaultLocale = sbLocales[1]

type LocaleKeys = keyof typeof locales
type TranslatedCaptions = Record<LocaleKeys, string>

export const getTranslatedCaption = (locale: string, captions: TranslatedCaptions): string =>
  captions[(supportedLngs.find((lng) => lng === locale) ?? sbDefaultLocale.value) as LocaleKeys]
