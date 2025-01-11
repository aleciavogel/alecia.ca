import * as codeSnippetPageBlocks from './blocks'
import * as codeSnippetPageObjects from './objects'
// import * as codeSnippetDocuments from './documents'

export * from './blocks'
export * from './objects'
// export * from './documents'

// Dynamic export of all sanity schemas in the codeSnippet domain
export const codeSnippetSchemas = [
  // ...Object.values(codeSnippetDocuments),
  ...Object.values(codeSnippetPageBlocks),
  ...Object.values(codeSnippetPageObjects),
]
