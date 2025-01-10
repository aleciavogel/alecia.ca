import { render } from '@testing-library/react'

import ProjectsUi from './projects-ui'

describe('ProjectsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectsUi />)
    expect(baseElement).toBeTruthy()
  })
})
