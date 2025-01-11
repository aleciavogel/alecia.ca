// import * as projectPageBlocks from './blocks'
// import * as projectPageObjects from './objects'
import * as projectDocuments from './documents'

// export * from './blocks'
// export * from './objects'
export * from './documents'

// Dynamic export of all sanity schemas in the project domain
export const projectSchemas = [
  ...Object.values(projectDocuments),
  // ...Object.values(projectPageBlocks),
  // ...Object.values(projectPageObjects),
]
