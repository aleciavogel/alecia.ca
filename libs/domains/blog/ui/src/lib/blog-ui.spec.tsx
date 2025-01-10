import { render } from '@testing-library/react'

import BlogUi from './blog-ui'

describe('BlogUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogUi />)
    expect(baseElement).toBeTruthy()
  })
})
