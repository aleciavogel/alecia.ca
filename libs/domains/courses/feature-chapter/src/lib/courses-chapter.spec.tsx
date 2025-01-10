import { render } from '@testing-library/react'

import CoursesChapter from './courses-chapter'

describe('CoursesChapter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CoursesChapter />)
    expect(baseElement).toBeTruthy()
  })
})
