// import * as experimentPageBlocks from './blocks'
import * as experimentDocuments from './documents'

// export * from './blocks'
export * from './documents'

// Dynamic export of all sanity schemas in the experiment domain
export const experimentSchemas = [
  ...Object.values(experimentDocuments),
  //...Object.values(experimentPageBlocks)
]
