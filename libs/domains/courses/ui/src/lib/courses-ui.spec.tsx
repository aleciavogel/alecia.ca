import { render } from '@testing-library/react'

import CoursesUi from './courses-ui'

describe('CoursesUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoursesUi />)
    expect(baseElement).toBeTruthy()
  })
})
