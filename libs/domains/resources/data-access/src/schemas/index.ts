// import * as resourcePageBlocks from './blocks'
import * as resourceDocuments from './documents'
import * as resourceObjects from './objects'

// export * from './blocks'
export * from './documents'
export * from './objects'

// Dynamic export of all sanity schemas in the resource domain
export const resourceSchemas = [
  ...Object.values(resourceDocuments),
  ...Object.values(resourceObjects),
  //...Object.values(resourcePageBlocks)
]
