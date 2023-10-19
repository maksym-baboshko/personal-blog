import { render, screen } from '@testing-library/react'

import { Button } from '..'

describe('Button', () => {
  it('should render Button', () => {
    render(<Button>Button</Button>)
    expect(screen.getByText('Button')).toBeInTheDocument()
  })

  it('should render Button with theme', () => {
    render(<Button variant="solid">Button</Button>)
    expect(screen.getByText('Button')).toHaveClass('solid')
  })
})
