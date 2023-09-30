import { render, screen } from '@testing-library/react'

import { Button, ButtonVariant } from '.'

describe('Button', () => {
  it('should render Button', () => {
    render(<Button>Button</Button>)
    expect(screen.getByText('Button')).toBeInTheDocument()
  })

  it('should render Button with theme', () => {
    render(<Button variant={ButtonVariant.SOLID}>Button</Button>)
    expect(screen.getByText('Button')).toHaveClass('solid')
  })
})
