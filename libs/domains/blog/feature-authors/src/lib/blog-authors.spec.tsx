import { render } from '@testing-library/react'

import BlogAuthors from './blog-authors'

describe('BlogAuthors', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogAuthors />)
    expect(baseElement).toBeTruthy()
  })
})
