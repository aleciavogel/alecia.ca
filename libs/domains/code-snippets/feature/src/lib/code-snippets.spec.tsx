import { render } from '@testing-library/react'

import CodeSnippets from './code-snippets'

describe('CodeSnippets', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CodeSnippets />)
    expect(baseElement).toBeTruthy()
  })
})
