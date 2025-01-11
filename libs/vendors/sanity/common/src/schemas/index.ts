import * as commonDocuments from './documents'
import * as commonObjects from './objects'

export * from './documents'
export * from './objects'

export const commonSchemas = [...Object.values(commonObjects), ...Object.values(commonDocuments)]
