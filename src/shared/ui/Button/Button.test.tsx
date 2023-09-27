import { render, screen } from '@testing-library/react'

import { Button, ButtonTheme } from '.'

describe('Button', () => {
  it('should render Button', () => {
    render(<Button>Button</Button>)
    expect(screen.getByText('Button')).toBeInTheDocument()
  })

  it('should render Button with theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Button</Button>)
    expect(screen.getByText('Button')).toHaveClass('clear')
  })
})
