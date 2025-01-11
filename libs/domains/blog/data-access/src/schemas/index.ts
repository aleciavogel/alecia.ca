import * as blogPageBlocks from './blocks'
import * as blogDocuments from './documents'

export * from './blocks'
export * from './documents'

// Dynamic export of all sanity schemas in the blog domain
export const blogSchemas = [...Object.values(blogDocuments), ...Object.values(blogPageBlocks)]
