import { type ReactNode } from 'react'

import { I18nextProvider } from 'react-i18next'
import { render, type RenderResult } from '@testing-library/react'

import { i18nForTests } from '@app/config/i18n/i18nForTests'

export const renderUsingI18next = (component: ReactNode): RenderResult => {
  return render(<I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>)
}
