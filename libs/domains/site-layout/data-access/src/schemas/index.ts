import * as siteLayoutBlocks from './blocks'
import * as siteLayoutDocuments from './documents'
import * as siteLayoutObjects from './objects'

export * from './blocks'
export * from './documents'
export * from './objects'

export const siteLayoutSchemas = [
  ...Object.values(siteLayoutObjects),
  ...Object.values(siteLayoutDocuments),
  ...Object.values(siteLayoutBlocks),
]
