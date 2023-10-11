import { type ReactNode } from 'react'

import { I18nextProvider } from 'react-i18next'
import { type DeepPartial } from '@reduxjs/toolkit'
import { render, type RenderResult } from '@testing-library/react'
import { MemoryRouter, type MemoryRouterProps } from 'react-router-dom'

import { type RootState } from '@shared/types'
import { i18nForTests } from '@app/config/i18n/i18nForTests'
import { StoreProvider } from '@app/providers/StoreProvider'

interface RenderWithProvidersOptions extends MemoryRouterProps {
  initialState?: DeepPartial<RootState>
}

export const renderWithProviders = (
  component: ReactNode,
  options: RenderWithProvidersOptions = {}
): RenderResult => {
  const { initialState, ...restOptions } = options

  return render(
    <StoreProvider initialState={initialState}>
      <I18nextProvider i18n={i18nForTests}>
        <MemoryRouter {...restOptions}>{component}</MemoryRouter>
      </I18nextProvider>
    </StoreProvider>
  )
}
