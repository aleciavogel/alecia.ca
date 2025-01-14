import { render } from '@testing-library/react'

import ContactUi from './contact-ui'

describe('ContactUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactUi />)
    expect(baseElement).toBeTruthy()
  })
})
