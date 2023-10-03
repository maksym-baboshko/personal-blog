import { fireEvent, screen } from '@testing-library/react'

import { renderWithI18next, withRouter } from '@shared/lib/tests'

import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('should render', () => {
    renderWithI18next(withRouter(<Sidebar />))
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  it('should toggle sidebar', () => {
    renderWithI18next(withRouter(<Sidebar />))

    const toggleBtn = screen.getByTestId('sidebar-toggle')

    fireEvent.click(toggleBtn) // expand
    fireEvent.click(toggleBtn) // collapse

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
