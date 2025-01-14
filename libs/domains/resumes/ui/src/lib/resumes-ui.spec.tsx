import { render } from '@testing-library/react'

import ResumesUi from './resumes-ui'

describe('ResumesUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResumesUi />)
    expect(baseElement).toBeTruthy()
  })
})
