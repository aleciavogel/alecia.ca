import { render } from '@testing-library/react'

import Quizzes from './quizzes'

describe('Quizzes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Quizzes />)
    expect(baseElement).toBeTruthy()
  })
})
