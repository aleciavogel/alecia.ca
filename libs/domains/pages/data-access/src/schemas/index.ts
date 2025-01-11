import * as pageBlocks from './blocks'
import * as pageDocuments from './documents'
import * as pageObjects from './objects'

export * from './blocks'
export * from './documents'
export * from './objects'

// Dynamic export of all sanity schemas in the page domain
export const pageSchemas = [
  ...Object.values(pageDocuments),
  ...Object.values(pageBlocks),
  ...Object.values(pageObjects),
]
