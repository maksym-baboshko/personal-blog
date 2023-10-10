import { screen, fireEvent } from '@testing-library/react'

import { renderWithProviders } from '@shared/lib/tests'

import { Counter } from './Counter'

describe('Counter', () => {
  beforeEach(() => {
    renderWithProviders(<Counter />, { initialState: { counter: { value: 42 } } })
  })

  it('should render with provided initial state', () => {
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Counter value: 42')
  })

  it('should handle increment', () => {
    fireEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Counter value: 43')
  })

  it('should handle decrement', () => {
    fireEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Counter value: 41')
  })
})
