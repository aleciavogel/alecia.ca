import { render } from '@testing-library/react'

import CourseQuizzes from './course-quizzes'

describe('CourseQuizzes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CourseQuizzes />)
    expect(baseElement).toBeTruthy()
  })
})
