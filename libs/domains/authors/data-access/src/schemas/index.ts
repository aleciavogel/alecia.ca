// import * as authorPageBlocks from './blocks'
import * as authorDocuments from './documents'

// export * from './blocks'
export * from './documents'

// Dynamic export of all sanity schemas in the author domain
export const authorSchemas = [
  ...Object.values(authorDocuments),
  //...Object.values(authorPageBlocks)
]
