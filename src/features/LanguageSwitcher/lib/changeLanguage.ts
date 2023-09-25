import { supportedLngs } from '@shared/constants/i18n'

export const getNextLang = (currentLang: string): string => {
  let currentLangIndex = supportedLngs.indexOf(currentLang)
  currentLangIndex = (currentLangIndex + 1) % supportedLngs.length

  return supportedLngs[currentLangIndex]
}
