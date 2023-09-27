import { fireEvent, screen } from '@testing-library/react'

import { renderUsingI18next } from '@shared/lib/tests'

import { Sidebar } from '..'

describe('Sidebar', () => {
  it('should render', () => {
    renderUsingI18next(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  it('should toggle sidebar', () => {
    renderUsingI18next(<Sidebar />)

    const toggleBtn = screen.getByTestId('sidebar-toggle')

    fireEvent.click(toggleBtn) // expand
    fireEvent.click(toggleBtn) // collapse

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
