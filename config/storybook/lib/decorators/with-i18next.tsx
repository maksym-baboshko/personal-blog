/* eslint-disable @typescript-eslint/no-floating-promises */
import { Suspense, useEffect } from 'react'

import { I18nextProvider } from 'react-i18next'
import { type Decorator } from '@storybook/react'

import { i18n } from '@app/config/i18n'

export const withI18next: Decorator = (Story, context) => {
  const { locale } = context.globals

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale])

  return (
    <Suspense fallback="">
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  )
}
