import { render } from '@testing-library/react'

import CodeSnippetsUi from './code-snippets-ui'

describe('CodeSnippetsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CodeSnippetsUi />)
    expect(baseElement).toBeTruthy()
  })
})
