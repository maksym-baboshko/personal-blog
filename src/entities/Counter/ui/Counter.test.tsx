import { screen, fireEvent } from '@testing-library/react'

import { renderWithProviders } from '@shared/lib/tests'

import { Counter } from './Counter'

const initialState = {
  counter: { value: 42 },
  user: { authData: { accessToken: '', user: { email: '', id: 0 } } }
}

describe('Counter', () => {
  it('should render with provided initial state', () => {
    renderWithProviders(<Counter />, { initialState })
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Counter value: 42')
  })

  it('should handle increment', () => {
    renderWithProviders(<Counter />, { initialState })
    fireEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Counter value: 43')
  })

  it('should handle decrement', () => {
    renderWithProviders(<Counter />, { initialState })
    fireEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('counter-value')).toHaveTextContent('Counter value: 41')
  })
})
