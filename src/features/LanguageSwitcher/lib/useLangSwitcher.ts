import { useCallback } from 'react'

import { useTranslation } from 'react-i18next'

import { getNextLang } from './getNextLang'

export const useLangSwitcher = () => {
  const { i18n } = useTranslation()

  const nextLang = getNextLang(i18n.language)

  const handleLangChange = useCallback(async (): Promise<void> => {
    await i18n.changeLanguage(nextLang)
  }, [i18n, nextLang])

  return { nextLang, handleLangChange }
}
