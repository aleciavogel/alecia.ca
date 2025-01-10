import { render } from '@testing-library/react'

import DarkMode from './dark-mode'

describe('DarkMode', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DarkMode />)
    expect(baseElement).toBeTruthy()
  })
})
