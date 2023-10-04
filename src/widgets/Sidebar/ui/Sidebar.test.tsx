import { fireEvent, screen } from '@testing-library/react'

import { renderWithProviders } from '@shared/lib/tests'

import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('should render', () => {
    renderWithProviders(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  it('should toggle sidebar', () => {
    renderWithProviders(<Sidebar />)

    const toggleBtn = screen.getByTestId('sidebar-toggle')

    fireEvent.click(toggleBtn) // expand
    fireEvent.click(toggleBtn) // collapse

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
