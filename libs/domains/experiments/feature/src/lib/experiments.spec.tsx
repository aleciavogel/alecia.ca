import { render } from '@testing-library/react'

import Experiments from './experiments'

describe('Experiments', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Experiments />)
    expect(baseElement).toBeTruthy()
  })
})
