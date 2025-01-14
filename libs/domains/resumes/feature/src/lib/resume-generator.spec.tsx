import { render } from '@testing-library/react'

import ResumeGenerator from './resume-generator'

describe('ResumeGenerator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResumeGenerator />)
    expect(baseElement).toBeTruthy()
  })
})
