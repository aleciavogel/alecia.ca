import { render } from '@testing-library/react'

import SiteLayoutUi from './site-layout-ui'

describe('SiteLayoutUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SiteLayoutUi />)
    expect(baseElement).toBeTruthy()
  })
})
