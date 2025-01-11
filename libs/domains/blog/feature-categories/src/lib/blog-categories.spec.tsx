import { render } from '@testing-library/react'

import BlogCategories from './blog-categories'

describe('BlogCategories', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogCategories />)
    expect(baseElement).toBeTruthy()
  })
})
