import { render } from '@testing-library/react'

import ExperimentsUi from './experiments-ui'

describe('ExperimentsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExperimentsUi />)
    expect(baseElement).toBeTruthy()
  })
})
