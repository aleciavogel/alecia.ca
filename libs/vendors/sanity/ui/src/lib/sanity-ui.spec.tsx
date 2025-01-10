import { render } from '@testing-library/react'

import SanityUi from './sanity-ui'

describe('SanityUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SanityUi />)
    expect(baseElement).toBeTruthy()
  })
})
