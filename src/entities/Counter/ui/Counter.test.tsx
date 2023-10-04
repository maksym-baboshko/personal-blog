import { screen, fireEvent } from '@testing-library/react'

import { renderWithProviders } from '@shared/lib/tests'

import { Counter } from './Counter'

describe('Counter', () => {
  it('should render with provided initial state', () => {
    const initialState = { counter: { value: 42 } }

    renderWithProviders(<Counter />, { initialState })
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Counter value: 42')
  })

  it('should handle increment', () => {
    const initialState = { counter: { value: 42 } }

    renderWithProviders(<Counter />, { initialState })
    fireEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Counter value: 43')
  })

  it('should handle decrement', () => {
    const initialState = { counter: { value: 42 } }

    renderWithProviders(<Counter />, { initialState })
    fireEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Counter value: 41')
  })
})
