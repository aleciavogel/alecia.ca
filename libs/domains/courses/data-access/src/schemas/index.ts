import * as coursePageBlocks from './blocks'
import * as courseDocuments from './documents'

export * from './blocks'
export * from './documents'

// Dynamic export of all sanity schemas in the course domain
export const courseSchemas = [...Object.values(courseDocuments), ...Object.values(coursePageBlocks)]
