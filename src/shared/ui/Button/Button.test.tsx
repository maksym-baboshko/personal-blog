/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react'

import { Button } from '.'

describe('Button', () => {
  it('should render Button', () => {
    render(<Button>Button</Button>)
    expect(screen.getByText('Button')).toBeInTheDocument()
  })
})
