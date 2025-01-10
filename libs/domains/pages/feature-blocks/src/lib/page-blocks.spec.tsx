import { render } from '@testing-library/react'

import PageBlocks from './page-blocks'

describe('PageBlocks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageBlocks />)
    expect(baseElement).toBeTruthy()
  })
})
